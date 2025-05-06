package commands

import (
	"sync"
	"sync/atomic"
	"time"

	"com.cocos/kcp/network"
	"com.cocos/kcp/protocol"
	"google.golang.org/protobuf/proto"
)

var (
	map_user_account_ta        = make(map[string]uint32)
	userlock                   = &sync.RWMutex{}
	idCount             uint32 = 0
)

func register_login_cmd(srv *network.Server) {
	srv.SetMsgListener("LoginReq", func(conn *network.Connection, header *protocol.Header, body []byte) {
		req := protocol.LoginReq{}
		res := protocol.LoginRes{
			Code: 1,
		}

		defer func() {
			conn.Response("LoginRes", header, &res)
		}()

		err := proto.Unmarshal(body, &req)
		if err != nil {
			return
		}

		userlock.Lock()
		defer userlock.Unlock()
		id, ok := map_user_account_ta[req.Account]
		if ok {
			if c := conn.Manager.Get(id); c != nil {
				notify := protocol.NotifyKickout{
					Reason: 1,
					Msg:    "repeated login",
				}
				c.SendMessage(&protocol.Header{
					Cmd: "NotifyKickout",
				}, &notify)
			}
		} else {
			id = genUserID()
			map_user_account_ta[req.Account] = id
		}

		conn.Manager.Add(id, conn)
		res.Code = 0
		res.Pid = id
	})

	srv.SetMsgListener("HeartReq", func(conn *network.Connection, header *protocol.Header, body []byte) {
		res := protocol.HeartRes{
			Code: 0,
			Time: time.Now().UnixMilli(),
		}

		conn.Response("HeartRes", header, &res)
	})
}

func genUserID() uint32 {
	return atomic.AddUint32(&idCount, 1)
}
