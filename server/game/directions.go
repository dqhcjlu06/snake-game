package game

const (
	Left  int32 = 1
	Up    int32 = 2
	Right int32 = 3
	Down  int32 = 4
)

type Directions struct {
	current int32
	queue   []int32
}

func (d *Directions) Get() int32 {
	return d.current
}

func (d *Directions) Pop() int32 {
	if len(d.queue) == 0 {
		return d.current
	}
	d.current = d.queue[0]
	d.queue = d.queue[1:]
	return d.current
}

func (d *Directions) Push(dir int32) {
	d.queue = append(d.queue, dir)
}
func (d *Directions) Clear() {
	d.queue = []int32{}
	d.current = Right
}
