package commands

import (
	"sync"

	"com.cocos/kcp/game"
	"com.cocos/kcp/network"
	"com.cocos/kcp/protocol"
	"google.golang.org/protobuf/proto"
)

var (
	gamelock   = &sync.RWMutex{}
	gamelogics = make(map[string]*game.GameLogic)
	playrooms  = make(map[uint32]string)
)

func register_game_cmd(srv *network.Server) {
	// 加入房间， 房间不存在则创建
	manager := srv.GetConnectionManager()
	manager.OnClose = onClose

	srv.SetMsgListener("EnterGameReq", func(conn *network.Connection, header *protocol.Header, body []byte) {
		req := protocol.EnterGameReq{}
		res := protocol.EnterGameRes{
			Code: 1,
		}
		gamelock.Lock()
		defer func() {
			if res.Code == 0 {
				playrooms[conn.GetId()] = req.Roomno
			}
			conn.Response("EnterGameRes", header, &res)
			gamelock.Unlock()
		}()

		if err := proto.Unmarshal(body, &req); err != nil {
			return
		}

		if logic, ok := gamelogics[req.Roomno]; ok {
			logic.OnEnterGame(conn.GetId(), req.IsPlayer, &res)
			return
		}

		logic := game.NewGameLogic(srv, req.Seat)
		gamelogics[req.Roomno] = logic
		logic.OnEnterGame(conn.GetId(), req.IsPlayer, &res)
	})

	// 准备
	srv.SetMsgListener("SendReadyReq", func(conn *network.Connection, header *protocol.Header, body []byte) {
		res := protocol.SendReadyRes{
			Code: 1,
		}
		gamelock.RLock()
		defer func() {
			conn.Response("SendReadyRes", header, &res)
			gamelock.RUnlock()
		}()

		roomno, ok := playrooms[conn.GetId()]
		if !ok {
			return
		}

		logic, ok := gamelogics[roomno]
		if !ok {
			return
		}
		res.Code = logic.OnSendReady(conn.GetId())
	})

	// 方向
	srv.SetMsgListener("SendDirectionReq", func(conn *network.Connection, header *protocol.Header, body []byte) {
		req := protocol.SendDirectionReq{}
		res := protocol.SendDirectionRes{
			Code: 0,
		}

		gamelock.RLock()
		defer func() {
			conn.Response("SendDirectionRes", header, &res)
			gamelock.RUnlock()
		}()

		if err := proto.Unmarshal(body, &req); err != nil {
			return
		}

		g := getPlayerGameLogic(conn.GetId())
		if g == nil {
			return
		}

		res.Code = g.OnSendDirection(conn.GetId(), req.Direction)
	})

	// 获取指定帧信息
	srv.SetMsgListener("GetIndexFrameReq", func(conn *network.Connection, header *protocol.Header, body []byte) {
		req := protocol.GetIndexFrameReq{}
		res := protocol.GetIndexFrameRes{
			Code: 1,
		}
		gamelock.RLock()
		defer func() {
			conn.Response("GetIndexFrameRes", header, &res)
			gamelock.RUnlock()
		}()

		if err := proto.Unmarshal(body, &req); err != nil {
			return
		}

		g := getPlayerGameLogic(conn.GetId())
		if g == nil {
			return
		}
		g.GetIndexFrameReq(req.Index, &res)
	})

	// 同步部分帧数据
	srv.SetMsgListener("SysncFramesReq", func(conn *network.Connection, header *protocol.Header, body []byte) {
		req := protocol.SysncFramesReq{}
		res := protocol.SysncFramesRes{
			Code: 1,
		}
		gamelock.RLock()
		defer func() {
			conn.Response("SysncFramesRes", header, &res)
			gamelock.RUnlock()
		}()

		if err := proto.Unmarshal(body, &req); err != nil {
			return
		}

		g := getPlayerGameLogic(conn.GetId())
		if g == nil {
			return
		}

		g.SyncFrames(req.Start, req.End, &res)
	})

	// 吃到食物
	srv.SetMsgListener("EatFoodReq", func(conn *network.Connection, header *protocol.Header, body []byte) {
		req := protocol.EatFoodReq{}
		res := protocol.EatFoodRes{
			Code: 1,
		}
		gamelock.RLock()
		defer func() {
			conn.Response("EatFoodRes", header, &res)
			gamelock.RUnlock()
		}()

		if err := proto.Unmarshal(body, &req); err != nil {
			return
		}

		g := getPlayerGameLogic(conn.GetId())
		if g == nil {
			return
		}

		res.Code = g.OnEatFood(conn.GetId(), req.Food)
	})

	// 玩家游戏over
	srv.SetMsgListener("GamePlayerEndReq", func(conn *network.Connection, header *protocol.Header, body []byte) {
		res := protocol.GamePlayerEndRes{
			Code: 1,
		}
		gamelock.RLock()
		defer func() {
			gamelock.RUnlock()
			conn.Response("GamePlayerEndRes", header, &res)
		}()
		g := getPlayerGameLogic(conn.GetId())
		if g == nil {
			return
		}
		res.Code = g.OnGamePlayerEnd(conn.GetId())
	})
}

func getPlayerGameLogic(pid uint32) *game.GameLogic {
	roomno, ok := playrooms[pid]
	if !ok {
		return nil
	}
	return gamelogics[roomno]
}

func onClose(conn *network.Connection) {
	if conn.GetId() == 0 {
		return
	}

	gamelock.Lock()

	defer func() {
		gamelock.Unlock()
	}()

	logic := getPlayerGameLogic(conn.GetId())
	if logic != nil && logic.PlayerOffline(conn.GetId()) == 0 {
		delete(playrooms, conn.GetId())
	}
}
