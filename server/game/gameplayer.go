package game

import "math/rand"

const (
	MAX_GAME_WIDTH  int32 = 31
	MAX_GAME_HEIGHT int32 = 39
)

type Vec2 struct {
	X int32
	Y int32
}

type GamePlayer struct {
	Pid       uint32      // 玩家ID
	Dir       *Directions // 玩家方向
	Ready     bool
	Foods     []Vec2
	IsOver    bool
	foodReady bool
	IsOnline  bool
}

func NewGamePlayer(pid uint32) *GamePlayer {
	return &GamePlayer{
		Pid:       pid,
		Dir:       &Directions{current: Right},
		Ready:     false,
		foodReady: true,
		IsOnline:  true,
	}
}

func (p *GamePlayer) EatFood(x int32, y int32) int32 {
	for i := 0; i < len(p.Foods); i++ {
		if p.Foods[i].X == x && p.Foods[i].Y == y {
			p.Foods = append(p.Foods[:i], p.Foods[i+1:]...)
			p.foodReady = true
			return 0
		}
	}
	return 1
}

func (p *GamePlayer) ReadyFood() *Vec2 {
	if !p.foodReady {
		return nil
	}

	p.foodReady = false
	x := rand.Int31n(MAX_GAME_WIDTH) - MAX_GAME_WIDTH/2
	y := rand.Int31n(MAX_GAME_HEIGHT) - MAX_GAME_HEIGHT/2
	p.Foods = append(p.Foods, Vec2{
		X: x,
		Y: y,
	})
	return &Vec2{
		X: x,
		Y: y,
	}
}
