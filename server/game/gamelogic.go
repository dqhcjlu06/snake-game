package game

import (
	"sync"
	"time"

	"com.cocos/kcp/network"
	"com.cocos/kcp/protocol"
	"google.golang.org/protobuf/proto"
)

const (
	MaxPlayerCount = 2
)

type GameLogic struct {
	RoomNo         string
	IsGameOver     bool
	srv            *network.Server
	pids           []uint32
	players        map[uint32]*GamePlayer
	lock           *sync.RWMutex
	maxplayers     int32
	running        bool
	currFrameIndex int32
	frames         []*protocol.BroadcastFrame
}

func NewGameLogic(srv *network.Server, playernum int32, roomno string) *GameLogic {
	g := &GameLogic{
		srv:            srv,
		players:        make(map[uint32]*GamePlayer),
		pids:           make([]uint32, 0),
		lock:           &sync.RWMutex{},
		maxplayers:     playernum,
		running:        false,
		currFrameIndex: -1,
		RoomNo:         roomno,
	}
	go g.loop()
	return g
}

// 加入游戏
func (g *GameLogic) OnEnterGame(pid uint32, isPlayer bool, res *protocol.EnterGameRes) {
	g.lock.Lock()
	defer func() {
		if res.Code == 0 {
			notify := protocol.NotifyGamePlayerEnter{
				Pid:      pid,
				IsPlayer: isPlayer,
			}
			g.broadcast("NotifyGamePlayerEnter", &notify)

			if !g.running && len(g.players) >= int(g.maxplayers) {
				g.gamestart()
			}
		}

		g.lock.Unlock()
	}()

	if isPlayer {
		// 可玩人数已满
		if _, ok := g.players[pid]; ok {
			res.Code = 0
		} else {
			if len(g.players) >= int(g.maxplayers) {
				res.Code = 1
				res.Msg = "玩家已满，请进其他房间"
				return
			}
			g.players[pid] = NewGamePlayer(pid)
		}
	}

	bIn := false
	for _, p := range g.pids {
		if p == pid {
			bIn = true
		}

		_, ok := g.players[p]
		res.Players = append(res.Players, &protocol.NotifyGamePlayerEnter{
			Pid:      p,
			IsPlayer: ok,
		})
	}

	if !bIn {
		g.pids = append(g.pids, pid)
	}

	res.CurrFrameIndex = g.currFrameIndex
	res.Running = g.running
	res.Seat = g.maxplayers
	res.Code = 0
}

func (g *GameLogic) OnSendReady(pid uint32) int32 {
	g.lock.Lock()
	defer func() {
		allready := true
		for _, player := range g.players {
			if !player.Ready {
				allready = false
				break
			}
		}

		if allready {
			g.running = true
			g.broadcast("NotifyGameStart", nil)
		}

		g.lock.Unlock()
	}()

	p, ok := g.players[pid]
	if !ok {
		return 1
	}

	if p.Ready {
		return 1
	}

	p.Ready = true

	g.broadcast("PlayerReadyStatus", &protocol.PlayerReadyStatus{
		Pid:   pid,
		Ready: true,
	})

	return 0
}

func (g *GameLogic) OnSendDirection(pid uint32, dir int32) int32 {
	g.lock.Lock()
	defer func() {
		g.lock.Unlock()
	}()

	if player, ok := g.players[pid]; ok {
		player.Dir.Push(dir)
	} else {
		return 1
	}

	return 0
}

func (g *GameLogic) GetIndexFrameReq(index uint32, res *protocol.GetIndexFrameRes) {
	g.lock.RLock()
	defer func() {
		g.lock.RUnlock()
	}()

	if len(g.frames) < int(index) {
		res.Code = 1
	}

	res.Frame = g.frames[index]
	res.Code = 0
}

func (g *GameLogic) SyncFrames(start uint32, end uint32, res *protocol.SysncFramesRes) {
	if end == 0 {
		end = uint32(len(g.frames))
	}

	g.lock.RLock()
	defer func() {
		g.lock.RUnlock()
	}()

	res.Code = 0
	res.Frames = g.frames[start:end]
}

func (g *GameLogic) OnEatFood(pid uint32, pos *protocol.Vec2) int32 {
	g.lock.Lock()
	defer func() {
		g.lock.Unlock()
	}()

	if player, ok := g.players[pid]; ok {
		return player.EatFood(pos.X, pos.Y)
	} else {
		return 1
	}
}

func (g *GameLogic) OnGamePlayerEnd(pid uint32) int32 {
	g.lock.Lock()
	defer g.lock.Unlock()

	if player, ok := g.players[pid]; ok {
		player.IsOver = true
		defer func() {
			g.broadcast("NotifyGamePlayerEnd", &protocol.NotifyGamePlayerEnd{
				Pid: pid,
			})
		}()
	} else {
		return 1
	}

	return 0
}

func (g *GameLogic) broadcast(cmd string, data proto.Message) {
	manager := g.srv.GetConnectionManager()
	header := protocol.Header{
		Cmd: cmd,
		Sn:  0,
	}

	for _, pid := range g.pids {
		conn := manager.Get(pid)
		if conn != nil {
			conn.SendMessage(&header, data)
		}
	}
}

// 玩家离线
func (g *GameLogic) PlayerOffline(pid uint32) int32 {
	g.lock.Lock()
	defer g.lock.Unlock()

	if player, ok := g.players[pid]; ok {
		player.IsOnline = false
		if g.running {
			return 1
		}
	} else {
		for i := 0; i < len(g.pids); i++ {
			if g.pids[i] == pid {
				g.pids = append(g.pids[:i], g.pids[i+1:]...)
				break
			}
		}
	}

	return 0
}

// 玩家上线
func (g *GameLogic) PlayerOnline(pid uint32) {
	g.lock.Lock()
	defer g.lock.Unlock()

	if player, ok := g.players[pid]; ok {
		player.IsOnline = true
	}
}

func (g *GameLogic) gamestart() {
	g.running = true
	notify := protocol.NotifyGameStart{
		Seat: g.maxplayers,
	}

	for _, p := range g.players {
		notify.Players = append(notify.Players, p.Pid)
	}

	g.broadcast("NotifyGameStart", &notify)
}

func (g *GameLogic) gameover() {
	g.running = false
	g.IsGameOver = true
	g.broadcast("NotifyGameOver", nil)
}

func (g *GameLogic) loop() {
	for {
		time.Sleep(time.Millisecond * 100) // 10 fps
		if !g.running {
			continue
		}
		g.updateFrame()
	}
}

func (g *GameLogic) updateFrame() {
	g.lock.Lock()
	defer g.lock.Unlock()
	g.currFrameIndex++
	data := protocol.BroadcastFrame{
		Index: g.currFrameIndex,
	}

	for _, p := range g.players {
		if p.IsOver {
			continue
		}

		playerframe := protocol.PlayerFrame{
			Pid:       p.Pid,
			Direction: p.Dir.Pop(),
		}

		if food := p.ReadyFood(); food != nil {
			playerframe.Newfood = &protocol.Vec2{
				X: food.X,
				Y: food.Y,
			}
		}

		data.Players = append(data.Players, &playerframe)
	}

	if len(data.Players) == 0 {
		g.gameover()
	} else {
		g.frames = append(g.frames, &data)
		g.broadcast("BroadcastFrame", &data)
	}
}
