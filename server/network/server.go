package network

import (
	"log"

	"github.com/xtaci/kcp-go/v5"
)

type Server struct {
	wsx      *Wsx
	conn_mgr *ConnectionManager
}

func NewServer() *Server {
	mgr := NewConnctionManager()
	return &Server{
		wsx:      newWsX(mgr),
		conn_mgr: mgr,
	}
}

func (s *Server) GetConnectionManager() *ConnectionManager {
	return s.conn_mgr
}

func (s *Server) SetMsgListener(cmd string, cb MsgHandler) bool {
	return s.conn_mgr.SetMsgListener(cmd, cb)
}

// ws listen on
func (s *Server) ListenAndServeWsx(relPath string, port string, certFile string, keyFile string) error {
	if len(certFile) > 0 {
		return s.wsx.listenAndServeLTS(relPath, port, certFile, keyFile)
	} else {
		return s.wsx.listenAndServe(relPath, port)
	}
}

func (s *Server) ListenAndServeKcpX(addr string, dataShards, parityShards int) error {
	if listener, err := kcp.ListenWithOptions(addr, nil, dataShards, parityShards); err != nil {
		return err
	} else {
		listener.SetDSCP(46)
		for {
			conn, err := listener.AcceptKCP()
			if err != nil {
				break
			}
			conn.SetWindowSize(1024, 1024)
			// https://github.com/skywind3000/kcp
			conn.SetNoDelay(1, 20, 2, 1) // 极速模式
			//go handle_client(s)
			_, err = s.conn_mgr.newKcpConnection(conn)
			if err != nil {
				log.Default().Printf("Server NewKcpContext error %v", err)
			}
		}
	}

	return nil
}
