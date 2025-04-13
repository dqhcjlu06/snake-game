package network

import (
	"log"
	"sync"
	"sync/atomic"
	"time"

	"com.cocos/kcp/protocol"
	"github.com/gorilla/websocket"
	"github.com/xtaci/kcp-go/v5"
)

type MsgHandler func(conn *Connection, header *protocol.Header, body []byte)

type ConnectionManager struct {
	client_tb map[uint32]*Connection
	cb_tb     map[string]MsgHandler
	lock      *sync.RWMutex
	sn        uint32
}

func NewConnctionManager() *ConnectionManager {
	mgr := &ConnectionManager{
		lock:      &sync.RWMutex{},
		client_tb: make(map[uint32]*Connection),
		cb_tb:     make(map[string]MsgHandler),
	}
	go mgr.loop()
	return mgr
}

func (mgr *ConnectionManager) newWsConnection(conn *websocket.Conn) (*Connection, error) {
	sn := mgr.genSn()
	c := createWsConn(mgr, sn, conn)
	return c, nil
}

func (mgr *ConnectionManager) newKcpConnection(conn *kcp.UDPSession) (*Connection, error) {
	sn := mgr.genSn()
	c := createKcpConn(mgr, sn, conn)
	return c, nil
}

func (mgr *ConnectionManager) Get(id uint32) *Connection {
	mgr.lock.RLock()
	defer mgr.lock.RUnlock()

	if conn, ok := mgr.client_tb[id]; ok {
		return conn
	} else {
		return nil
	}
}

func (mgr *ConnectionManager) Add(id uint32, conn *Connection) {
	mgr.lock.Lock()
	defer mgr.lock.Unlock()
	if old_conn, ok := mgr.client_tb[id]; ok {
		log.Default().Printf("connection %d already exist", id)
		mgr.shutdown(old_conn)
	}
	conn.id = id
	mgr.client_tb[id] = conn
}

func (mgr *ConnectionManager) Del(id uint32) {
	mgr.lock.Lock()
	defer mgr.lock.Unlock()

	if conn, ok := mgr.client_tb[id]; ok {
		// conn.dead = true
		mgr.shutdown(conn)
		delete(mgr.client_tb, id)
	}
}

func (mgr *ConnectionManager) SetMsgListener(cmd string, cb MsgHandler) bool {
	if mgr.cb_tb[cmd] != nil {
		log.Default().Printf("cmd %s already registered", cmd)
		mgr.cb_tb[cmd] = cb
	} else {
		mgr.cb_tb[cmd] = cb
	}

	return true
}

func (mgr *ConnectionManager) GetCallback(cmd string) MsgHandler {
	return mgr.cb_tb[cmd]
}

func (mgr *ConnectionManager) delConnection(conn *Connection) {
	id := conn.id
	mgr.Del(id)
	mgr.shutdown(conn)
}

/**检测心跳 */
func (mgr *ConnectionManager) loop() {
	time.Sleep(5 * time.Second)
}

func (mgr *ConnectionManager) shutdown(conn *Connection) {
	conn.shutdownFromManager()
}

func (mgr *ConnectionManager) genSn() uint32 {
	return atomic.AddUint32(&mgr.sn, 1)
}
