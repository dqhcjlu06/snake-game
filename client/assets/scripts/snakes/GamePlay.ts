import { _decorator, Color, Component, Graphics, instantiate, math, Node, Prefab, Vec2 } from 'cc';
import Locations from './locations';
import Piece from './piece';
import { DIRECTIONS, FRAME_DELTA_TIME, GAME_EVENT, GAME_VIEW_HEIGHT, GAME_VIEW_WIDTH, LENGTH_MIN, SIZE } from './constants';
import Direction from './directions';
import { EventX } from '../base/EventX';
const { ccclass, property } = _decorator;

// x: [-15, 15]
// y: [-19, 19]

@ccclass('GamePlay')
export class GamePlay extends Component {
    @property(Graphics)
    graphics: Graphics = null;

    @property(Prefab)
    backPiecePrefab: Prefab = null;

    @property(Prefab)
    foodPiecePrefab: Prefab = null;

    @property(Prefab)
    snakePiecePrefab: Prefab = null;

    private foods: Piece[] = [];
    private locations: Locations = new Locations();

    private head: Piece;
    private tail: Piece;
    private moving: boolean = false;
    private directions: Direction = new Direction();
    private speed: number = 1

    start() {
        this.drawFrame();
        this.drawBackpiece();

      //  this.addFood(10, 15)

        this.initSnakes(3, 0)

        // this.schedule(() => {
        //     this.framed()
        // }, FRAME_DELTA_TIME / this.speed)
    }

    initSnakes(x: number, y: number) {
        this.head = this.createSnake(x, y, 'head');

        let curr = this.head;
        for (let i = 0; i < LENGTH_MIN; i++) {
            let piece = this.createSnake(curr.x - 1, y, 'body');
            piece.prev = curr;
            curr.next = piece;
            curr = piece;
            this.locations.set(curr.x, curr.y, curr);
        }
        this.tail = curr;
        this.moving = true;
    }

    private drawFrame() {
        this.graphics.strokeColor = Color.BLACK
        this.graphics.lineWidth = 3;
        this.graphics.clear();
        this.graphics.moveTo(-374, -469);
        this.graphics.lineTo(374, -469);
        this.graphics.lineTo(374, 469);
        this.graphics.lineTo(-374, 469);
        this.graphics.lineTo(-374, -469);
        this.graphics.stroke();
    }


    private drawBackpiece() {
        let x = Math.floor(GAME_VIEW_WIDTH / 2);
        let y = Math.floor(GAME_VIEW_HEIGHT / 2)

        for (let i = -x; i <= x; i++) {
            for (let j = -y; j <= y; j++) {
                let backpiece = instantiate(this.backPiecePrefab);
                backpiece.setPosition(i * SIZE, j * SIZE);
                backpiece.parent = this.node
            }
        }
    }

    addFood(x: number, y: number) {
        let food = instantiate(this.foodPiecePrefab);
        food.parent = this.node
        this.foods.push(new Piece({ x, y, type: "food", node: food }));
    }

    private checkEatFood(x: number, y: number): boolean {
        for (let i = 0; i < this.foods.length; i++) {
            if (this.foods[i].x == x && this.foods[i].y == y) {
                this.foods[i].node.removeFromParent();
                this.foods.splice(i, 1);
                return true;
            }
        }

        return false;
    }

    private createSnake(x: number, y: number, type: string) {
        let n = instantiate(this.snakePiecePrefab);
        n.parent = this.node
        return new Piece({ x, y, type, node: n });
    }

    framed(currentDir: DIRECTIONS): void {
        if (this.moving) {
            // let currentDir = this.directions.pop();
            let nextpos: Vec2 = new Vec2(this.head.x, this.head.y);
            switch (currentDir) {
                case DIRECTIONS.LEFT:
                    nextpos.x -= 1;
                    break;
                case DIRECTIONS.RIGHT:
                    nextpos.x += 1;
                    break;
                case DIRECTIONS.UP:
                    nextpos.y += 1;
                    break;
                case DIRECTIONS.DOWN:
                    nextpos.y -= 1;
                    break;
                default:
                    return;
            }

            nextpos = this.makeMoveRight(nextpos)

            if (this.checkEatFood(nextpos.x, nextpos.y)) {
                let piece = this.createSnake(nextpos.x, nextpos.y, "head")
                piece.next = this.head;
                this.head.prev = piece;
                this.head.setType("body");
                this.locations.set(this.head.x, this.head.y, this.head)
               
                this.head = piece;
                EventX.emit(GAME_EVENT.EAT_FOOD, this, nextpos.x, nextpos.y);
            } else {
                const prevHead = this.head;
                this.locations.remove(this.tail.x, this.tail.y);
                this.locations.set(this.head.x, this.head.y, this.head);

                [this.head, this.tail] = [this.tail, this.tail.prev];
                this.tail.next = null;
                this.tail.setType('tail');

                prevHead.setType('body');
                prevHead.prev = this.head;

                this.head.prev = null;
                this.head.next = prevHead;
                this.head.setType('head');
                this.head.move(nextpos.x, nextpos.y);
            }

            if(this.locations.has(this.head.x, this.head.y)) {
                this.gameOver()
            }
        }
    }

    pushDirection(dir: DIRECTIONS) {
        this.directions.set(dir)
    }

    makeMoveRight(vec: Vec2): Vec2 {
        if (vec.x < -GAME_VIEW_WIDTH / 2) {
            vec.x += GAME_VIEW_WIDTH;
        }
        if (vec.x > GAME_VIEW_WIDTH / 2) {
            vec.x -= GAME_VIEW_WIDTH;
        }

        if (vec.y > GAME_VIEW_HEIGHT / 2) {
            vec.y -= GAME_VIEW_HEIGHT;
        }

        if (vec.y < -GAME_VIEW_HEIGHT / 2) {
            vec.y += GAME_VIEW_HEIGHT;
        }
        return vec
    }

    pauseGame() {
        this.moving = false;
    }

    resumeGame() {
        this.moving = true;
    }

    private gameOver() {
        this.moving = false;
        EventX.emit(GAME_EVENT.GAME_OVER, this);
    }
}
