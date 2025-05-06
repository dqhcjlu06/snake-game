import { DIRECTIONS } from "./constants";

export default class Direction {
    private queue: number[] = [];
    private current: number = DIRECTIONS.RIGHT

    set(key: number): void {
        this.queue.push(key);
    }

    get() : number {
        return this.current
    }

    pop() : number {
        if (this.queue.length > 0) {
            this.current = this.queue.shift()
        }
        return this.get();
    }

    flush():void {
        this.queue = [];
        this.current = DIRECTIONS.RIGHT;
    }

    peek(): number {
        return this.queue.length > 0 ? this.queue[this.queue.length - 1] : this.current;
    }
}
