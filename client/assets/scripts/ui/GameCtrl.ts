import { _decorator, Component, EventTouch, Input, instantiate, Prefab, profiler, Node, Vec2, Toggle, EditBox, Label } from 'cc';
import { GamePlay } from '../snakes/GamePlay';
import { DIRECTIONS, FRAME_DELTA_TIME, GAME_EVENT, GAME_VIEW_HEIGHT, GAME_VIEW_WIDTH } from '../snakes/constants';
import Network from '../network/Network';
import { EventX } from '../base/EventX';
import protocol from "../protocols/protocol.js";
import Direction from '../snakes/directions';
import PlayerManager from '../manager/playermanager';

const { ccclass, property } = _decorator;

enum GAME_MOLD {
    STAND_ALONE = 1,
    SINGLE_NETWORKING = 2,
    MULTIPLYER_NETWORKING = 3,
}

@ccclass('GameCtrl')
export class GameCtrl extends Component {
    @property(Prefab)
    gameplayprefab: Prefab = null;

    @property(Node)
    settings: Node = null;

    private myGamePlayer: GamePlay

    private lastDir: DIRECTIONS = DIRECTIONS.RIGHT;
    private _touchStartPos: Vec2 = null;
    private _mold: GAME_MOLD = GAME_MOLD.STAND_ALONE;
    private directions: Direction = new Direction();

    protected start(): void {
        // 监听服务器消息
        EventX.on("NotifyGameStart", (header: protocol.protocol.Header, data: Uint8Array) => {
            console.log(`NotifyGameStart`)
            this.settings.active = false;
            this.initGamePlay();
        })

        EventX.on("NotifyGameOver", (header: protocol.protocol.Header, data: Uint8Array) => {
            console.log(`NotifyGameOver`)
            // this.settings.active = false;
            // this.initGamePlay();
        })

        EventX.on("BroadcastFrame", (header: protocol.protocol.Header, data: Uint8Array) => {
            let notify = protocol.protocol.BroadcastFrame.decode(data);
            for (let p of notify.players) {
                if (p.pid == PlayerManager.getInstance().getPlayerId()) {
                    this.myGamePlayer.framed(p.direction);
                    if ( p.newfood) {
                        this.myGamePlayer.addFood(p.newfood.x, p.newfood.y)
                    }
                }
            }
        })

        EventX.on("NotifyGamePlayerEnter", (header: protocol.protocol.Header, data: Uint8Array) => {
            let res = protocol.protocol.NotifyGamePlayerEnter.decode(data);
            console.log(`NotifyGamePlayerEnter:`, res)
        })

        EventX.on("NotifyGamePlayerEnd", (protocol: protocol.protocol.Header, data: Uint8Array) => { })

        EventX.on(GAME_EVENT.EAT_FOOD, this.onEatFoodNotify, this)
        EventX.on(GAME_EVENT.GAME_OVER, this.onGameOverNotify, this)

        profiler.hideStats();
    }

    onDirectionClick(evt: EventTouch, customEventData: string): void {
        let dir: DIRECTIONS
        switch (customEventData) {
            case 'RIGHT':
                dir = DIRECTIONS.RIGHT;
                break;
            case 'UP':
                dir = DIRECTIONS.UP;
                break;
            case 'LEFT':
                dir = DIRECTIONS.LEFT
                break
            case 'DOWN':
                dir = DIRECTIONS.DOWN
                break;
        }
        if (dir) {
            this.addActionDirection(dir)
        }
    }

    onPauseClick() {
        this.myGamePlayer.pauseGame()
    }

    onResumeClick() {
        this.myGamePlayer.resumeGame()
    }

    addActionDirection(dir: DIRECTIONS) {
        // 禁止原地掉头
        if ((this.lastDir + 2) % 4 === dir % 4) {
            return
        }
        this.lastDir = dir
        if (this._mold == GAME_MOLD.STAND_ALONE) {
            this.directions.set(dir);
        } else {
            let req = protocol.protocol.SendDirectionReq.create({
                direction: dir
            })
            let buf = protocol.protocol.SendDirectionReq.encode(req).finish();
            Network.getInstance().sendmsg("SendDirectionReq", buf, (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }

                if (data) {
                    let res = protocol.protocol.SendDirectionRes.decode(data);
                    console.log(res);
                }
            });
        }
    }

    /** game over */
    over(): void {
    }

    onEatFoodNotify(gameplay: GamePlay, x: number, y: number) {
        if (gameplay === this.myGamePlayer) {
            if (this._mold == GAME_MOLD.STAND_ALONE) {
                this.scheduleOnce(() => {
                    let x = Math.floor(Math.random() * GAME_VIEW_WIDTH - GAME_VIEW_WIDTH / 2);
                    let y = Math.floor(Math.random() * GAME_VIEW_HEIGHT - GAME_VIEW_HEIGHT / 2);
                    this.myGamePlayer.addFood(x, y);
                }, 0.5)
            } else { // 上传数据
                let food = new protocol.protocol.Vec2()
                food.x = x
                food.y = y
                let req = protocol.protocol.EatFoodReq.create({
                    food
                })

                let buf = protocol.protocol.EatFoodReq.encode(req).finish();
                console.log(`send eat food req:`, req, buf)

                Network.getInstance().sendmsg("EatFoodReq", buf, (err, data) => {
                    if (err) {
                        console.log(err);
                        return;
                    }

                    if (data) {
                        let res = protocol.protocol.EatFoodRes.decode(data);
                        console.log(res);
                    }
                });
            }
        }
    }

    /**
     * 玩家游戏结束
     */
    onGameOverNotify(gameplay: GamePlay) {
        if (gameplay == this.myGamePlayer) {
            if (this._mold == GAME_MOLD.STAND_ALONE) {
            } else {
                Network.getInstance().sendmsg("GamePlayerEndReq", null, (err, data) => {
                    if (err) {
                        console.log(err);
                        return;
                    }

                    if (data) {
                        let res = protocol.protocol.NotifyGameOver.decode(data);
                        console.log(res);
                    }
                });
            }
        }
    }

    onTouchStart(event: EventTouch) {
        this._touchStartPos = event.getUILocation();
    }

    onTouchEnd(event: EventTouch) {
        if (this._touchStartPos) {
            let delta = event.getUILocation().subtract(this._touchStartPos);
            if (Math.abs(delta.x) > Math.abs(delta.y)) { // 左右
                this.addActionDirection(delta.x > 0 ? DIRECTIONS.RIGHT : DIRECTIONS.LEFT);
            } else { // 上下
                this.addActionDirection(delta.y > 0 ? DIRECTIONS.UP : DIRECTIONS.DOWN);
            }
        }
        this._touchStartPos = null;
    }

    onTouchCancel(event: EventTouch) {
        this._touchStartPos = null;
    }

    onClickEnterGame(evt: EventTouch) {
        let node = evt.getCurrentTarget();

        let toggle1 = node.parent.getChildByPath("ToggleGroup/Toggle1")
        let toggle2 = node.parent.getChildByPath("ToggleGroup/Toggle2")

        if (toggle1.getComponent(Toggle).isChecked) {
            this._mold = GAME_MOLD.STAND_ALONE;
            EventX.emit("NotifyGameStart");
            this.startLocGame();
            return
        } else if (toggle2.getComponent(Toggle).isChecked) {
            this._mold = GAME_MOLD.SINGLE_NETWORKING;
        } else {
            this._mold = GAME_MOLD.MULTIPLYER_NETWORKING;
        }

        let editroom = node.parent.getChildByPath("editbox")
        let roomno = editroom.getComponent(EditBox).string;
        if (roomno == "") {
            this.showErr(node.parent, "请输入房间号")
            return
        }

        let req = protocol.protocol.EnterGameReq.create({
            isPlayer: true,
            roomno,
            seat: this._mold == GAME_MOLD.MULTIPLYER_NETWORKING ? 2 : 1
        })
        let buf = protocol.protocol.EnterGameReq.encode(req).finish();

        Network.getInstance().sendmsg("EnterGameReq", buf, (err, data) => {
            if (err) {
                console.log(err);
                return;
            }

            if (data) {
                let res = protocol.protocol.EnterGameRes.decode(data);
                console.log(res);
            }
        })
    }

    initGamePlay() {
        let n = instantiate(this.gameplayprefab);
        n.parent = this.node;
        n.setPosition(0, 200)
        this.myGamePlayer = n.getComponent(GamePlay)

        this.node.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);

        /* 其他玩家 */
        // let other = instantiate(this.gameplayprefab);
        // other.parent = this.node;
        // other.scale = new Vec3(0.5, 0.5, 1);
        // other.setPosition(-160, -540);
    }

    startLocGame() {
        this.schedule(() => {
            if (this.myGamePlayer) {
                let dir = this.directions.pop()
                this.myGamePlayer.framed(dir)
            }
        }, FRAME_DELTA_TIME)
    }

    private showErr(node: Node, err: string) {
        let nn = node.getChildByName("errmsg")
        if (nn) {
            nn.getComponent(Label).string = err
            nn.active = true
        }
    }
}
