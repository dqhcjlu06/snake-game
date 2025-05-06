import { _decorator, Component, Node, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('snakepiecectrl')
export class snakepiecectrl extends Component {
    @property(SpriteFrame)
    headersf: SpriteFrame = null;

    @property(SpriteFrame)
    bodysf: SpriteFrame = null;

    start() {
    }

    update(deltaTime: number) {
    }

    setType(type: string) {
        // switch (type) {
        //     case 'head':
        //         this.node.getComponent(Sprite).spriteFrame = this.headersf;
        //         break;
        //     case 'body':
        //         this.node.getComponent(Sprite).spriteFrame = this.bodysf;
        //         break
        // }
    }
}

