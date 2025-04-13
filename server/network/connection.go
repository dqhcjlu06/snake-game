package network

import (
	"bytes"
	"encoding/binary"
	"errors"
	"io"
	"log"
	"sync"

	"com.cocos/kcp/protocol"
	"github.com/gorilla/websocket"
	"github.com/xtaci/kcp-go/v5"
	"google.golang.org/protobuf/proto"
)

type Connection struct {
	Manager *ConnectionManager
	wsConn  *websocket.Conn
	kcpConn *kcp.UDPSession
	sn      uint32
	id      uint32
	lock    *sync.RWMutex
	send_ch chan []byte
	recv_ch chan []byte
	quit_ch chan bool

	dead bool
}

func createWsConn(mgr *ConnectionManager, sn uint32, conn *websocket.Conn) *Connection {
	c := &Connection{
		Manager: mgr,
		wsConn:  conn,
		sn:      sn,
		send_ch: make(chan []byte),
		recv_ch: make(chan []byte),
		quit_ch: make(chan bool),
		lock:    &sync.RWMutex{},
		dead:    false,
	}

	go c.gorecv()
	go c.gosend()

	return c
}

func createKcpConn(mgr *ConnectionManager, sn uint32, conn *kcp.UDPSession) *Connection {
	c := &Connection{
		Manager: mgr,
		kcpConn: conn,
		sn:      sn,
		send_ch: make(chan []byte),
		recv_ch: make(chan []byte),
		quit_ch: make(chan bool),
		lock:    &sync.RWMutex{},
		dead:    false,
	}

	go c.gorecv()
	go c.gosend()

	return c
}

func (conn *Connection) Send(header *protocol.Header, data []byte) error {
	hbuf, err := proto.Marshal(header)
	if err != nil {
		return err
	}

	bodylength := 0
	if data != nil {
		bodylength = len(data)
	}

	buf := new(bytes.Buffer)
	fbuf := make([]byte, 4)
	binary.BigEndian.PutUint32(fbuf, uint32(bodylength))

	buf.Write(fbuf)
	buf.Write(hbuf)
	if data != nil {
		buf.Write(data)
	}

	select {
	case <-conn.quit_ch:
		return errors.New("conn closed")
	case conn.send_ch <- buf.Bytes():
		return nil
	}
}

func (conn *Connection) GetId() uint32 {
	return conn.id
}

func (conn *Connection) SendMessage(header *protocol.Header, req proto.Message) error {
	data, err := proto.Marshal(req)
	if err != nil {
		return err
	}

	return conn.Send(header, data)
}

func (conn *Connection) Response(cmd string, header *protocol.Header, resp proto.Message) error {
	newheader := protocol.Header{
		Cmd: cmd,
		Sn:  header.Sn,
	}

	return conn.SendMessage(&newheader, resp)
}

func (conn *Connection) gosend() {
	defer func() {
		if conn.wsConn != nil {
			conn.wsConn.Close()
			conn.wsConn = nil
		}

		if conn.kcpConn != nil {
			conn.kcpConn.Close()
			conn.kcpConn = nil
		}
		conn.Manager.delConnection(conn)
	}()
	var send_ch = conn.send_ch
	var quit_ch = conn.quit_ch
	for {
		select {
		case <-quit_ch:
			return
		case bs, ok := <-send_ch:
			if !ok {
				continue
			}

			length := len(bs)
			lbuf := make([]byte, 4)
			binary.BigEndian.PutUint32(lbuf, uint32(length)+4)
			bs = append(lbuf, bs...)

			switch conn.ConnectionProtocolType() {
			case "ws":
				err := conn.wsConn.WriteMessage(websocket.BinaryMessage, bs)
				if err != nil {
					log.Default().Printf("ws send error %v\n", err)
					return
				}
			case "kcp":
				_, err := conn.kcpConn.Write(bs)
				if err != nil {
					log.Default().Printf("kcp send error %v\n", err)
					return
				}
			}
		}
	}
}

func (conn *Connection) gorecv() {
	defer func() {
		conn.Manager.delConnection(conn)
	}()

	var err error
	switch conn.ConnectionProtocolType() {
	case "ws":
		err = conn.readWsUtil()
	case "kcp":
		err = conn.readKcpUtil()
	}

	log.Default().Printf("conn recv data error %s\n", err.Error())
}

func (conn *Connection) shutdownFromManager() {
	conn.lock.Lock()
	defer conn.lock.Unlock()

	if conn.dead {
		return
	}
	conn.dead = true

	close(conn.quit_ch)
}

func (conn *Connection) handleMessage(length uint32, raw []byte) error {
	bodylength := binary.BigEndian.Uint32(raw[0:4])
	if bodylength+8 > length {
		return errors.New("body big then packet")
	}

	rawlen := uint32(len(raw))
	headerbyte := raw[4 : rawlen-bodylength]
	header := protocol.Header{}
	if err := proto.Unmarshal(headerbyte, &header); err != nil {
		return err
	}

	body := raw[rawlen-bodylength:]

	if cb := conn.Manager.GetCallback(header.Cmd); cb != nil {
		cb(conn, &header, body)
	} else {
		log.Default().Printf("no handler for cmd %s\n", header.Cmd)
	}
	return nil
}

func (conn *Connection) readWsUtil() error {
	var res []byte
	for {
		var raw []byte
		_, message, err := conn.wsConn.ReadMessage()
		if err != nil {
			return err
		}

		if len(res) != 0 {
			raw = append(raw, message...)
		} else {
			raw = message
		}

		if len(raw) < 4 {
			res = raw
			continue
		}

		var length = binary.BigEndian.Uint32(raw[0:4])
		if length > 65536 {
			return errors.New("pack too big")
		}

		if length > uint32(len(raw)) {
			res = raw
			continue
		}

		err = conn.handleMessage(length, raw[4:])
		if err != nil {
			return err
		}

		res = raw[length:]
	}
}

func (conn *Connection) readKcpUtil() error {
	header_byte := make([]byte, 4)
	if _, err := conn.kcpConn.Read(header_byte); err != nil {
		return err
	}
	length := binary.BigEndian.Uint32(header_byte)
	if length > 65536 {
		return errors.New("pack too big")
	}
	data := make([]byte, length)
	if _, err := io.ReadFull(conn.kcpConn, data); err != nil {
		return err
	}

	return conn.handleMessage(length, data)
}

func (conn *Connection) ConnectionProtocolType() string {
	if conn.wsConn != nil {
		return "ws"
	} else if conn.kcpConn != nil {
		return "kcp"
	} else {
		return "unknown"
	}
}
