package network

import (
	"encoding/binary"
	"log"

	"github.com/gorilla/websocket"
	"github.com/xtaci/kcp-go/v5"
)

type Connection struct {
	WsConn  *websocket.Conn
	KcpConn *kcp.UDPSession

	send_ch chan []byte
	recv_ch chan []byte
	quit_ch chan bool
}

func newWsContext() {}

func newKcpConnection() {
}

func (conn *Connection) gosend() {
	defer func() {
		if conn.WsConn != nil {
			conn.WsConn.Close()
			conn.WsConn = nil
		}

		if conn.KcpConn != nil {
			conn.KcpConn.Close()
			conn.KcpConn = nil
		}
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
				err := conn.WsConn.WriteMessage(websocket.BinaryMessage, bs)
				if err != nil {
					log.Default().Printf("ws send error %v\n", err)
					return
				}
			case "kcp":
				_, err := conn.KcpConn.Write(bs)
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
	}()

	var err error
	switch conn.ConnectionProtocolType() {
	case "ws":
		err = conn.readWsUtil()
	case "kcp":
		err = conn.readKcpUtil()
	}

	log.Default().Fatalf("conn recv data error %v\n", err)
}

func (conn *Connection) readWsUtil() error {
	return nil
}

func (conn *Connection) readKcpUtil() error {
	return nil
}

func (conn *Connection) ConnectionProtocolType() string {
	if conn.WsConn != nil {
		return "ws"
	} else if conn.KcpConn != nil {
		return "kcp"
	} else {
		return "unknown"
	}
}
