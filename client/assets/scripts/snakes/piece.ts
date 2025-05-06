import { Color, Node, Sprite } from 'cc';

import { DIRECTIONS, GAME_VIEW_HEIGHT, GAME_VIEW_WIDTH, SIZE } from "./constants";
import { snakepiecectrl } from '../ui/components/snakepiecectrl';

type PieceParams = {
    x: number;
    y: number;
    node: Node;
    type?: string;
    direction?: DIRECTIONS;
    next?: Piece;
    prev?: Piece;
}

export default class Piece {
    next: Piece = null;
    prev: Piece = null;
    type: string = 'body';
    node: Node;

    x: number;
    y: number;


    constructor({
        x,
        y,
        type = 'body',
        node,
        next = null,
        prev = null,
    }: PieceParams) {
        this.prev = prev;
        this.next = next;
        // this.direction = direction;
        this.node = node;

        this.setPos(x, y);
        this.setType(type);
    }

    bend(headDirection: string) {
    }

    isCollidingWith(node: Piece | null): boolean {
        return false;
    }

    move(x: number, y: number) {
        this.setPos(x, y)
    }

    remove(): void {
    }

    setPos(x: number, y: number): void {
        this.x = x;
        this.y = y;
        if (this.x < -GAME_VIEW_WIDTH / 2) {
            this.x += GAME_VIEW_WIDTH;
        }
        if (this.x > GAME_VIEW_WIDTH / 2) {
            this.x -= GAME_VIEW_WIDTH;
        }

        if (this.y > GAME_VIEW_HEIGHT / 2) {
            this.y -= GAME_VIEW_HEIGHT;
        }

        if (this.y < -GAME_VIEW_HEIGHT / 2) {
            this.y += GAME_VIEW_HEIGHT;
        }

        this.node.setPosition(this.x * SIZE, this.y * SIZE);
    }

    setType(type: string) {
        if (this.type === type) {
            return
        }
        this.type = type;
        let cttrl = this.node.getComponent(snakepiecectrl) as snakepiecectrl
        if (cttrl) {
            cttrl.setType(type);
        }
    }
}
