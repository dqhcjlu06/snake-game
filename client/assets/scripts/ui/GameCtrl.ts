import { _decorator, Component, EventTouch, Input, instantiate, Prefab, profiler, Node, Vec2, Toggle, EditBox, Label, game } from 'cc';
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
    private _gameplayers: Map<number, GamePlay> = new Map();
    private _isPlayer: boolean = true;

    private lastDir: DIRECTIONS = DIRECTIONS.RIGHT;
    private _touchStartPos: Vec2 = null;
    private _mold: GAME_MOLD = GAME_MOLD.STAND_ALONE;
    private directions: Direction = new Direction();
    private _currFrameIndex: number = -1; // 当前客户端处理帧, 服务器序列从0开始
    private _queueFrames: protocol.protocol.IBroadcastFrame[] = [];  // 未处理队列，客户端追针，新的帧数缓存
    private _lastFrameIndex: number = 0;  // 服务器下发最新帧数
    protected start(): void {
        // 监听服务器消息
        EventX.on("NotifyGameStart", (header: protocol.protocol.Header, data: Uint8Array) => {
            let notify = protocol.protocol.NotifyGameStart.decode(data);
            this.initGamePlay(notify.seat, notify.players);
        })

        EventX.on("NotifyGameOver", (header: protocol.protocol.Header, data: Uint8Array) => {
            console.log(`NotifyGameOver`)
        })

        EventX.on("NotifyGamePlayerEnter", (header: protocol.protocol.Header, data: Uint8Array) => {
            let res = protocol.protocol.NotifyGamePlayerEnter.decode(data);
            console.log(`NotifyGamePlayerEnter:`, res)
        })

        EventX.on("NotifyGamePlayerEnd", (protocol: protocol.protocol.Header, data: Uint8Array) => { })

        EventX.on(GAME_EVENT.EAT_FOOD, this.onEatFoodNotify, this)
        EventX.on(GAME_EVENT.GAME_OVER, this.onGameOverNotify, this)

        profiler.hideStats();

        this.node.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
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
    }

    onResumeClick() {
    }

    addActionDirection(dir: DIRECTIONS) {
        if (!this._isPlayer) return
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
        console.log('eat foot', x, y)
        let pid = PlayerManager.getInstance().getPlayerId();
        let myGamePlayer = this._gameplayers[pid];
        if (myGamePlayer == gameplay) {
            if (this._mold == GAME_MOLD.STAND_ALONE) {
                this.scheduleOnce(() => {
                    let x = Math.floor(Math.random() * GAME_VIEW_WIDTH - GAME_VIEW_WIDTH / 2);
                    let y = Math.floor(Math.random() * GAME_VIEW_HEIGHT - GAME_VIEW_HEIGHT / 2);
                    myGamePlayer.addFood(x, y);
                }, 0.5)
            } else { // 上传数据
                let food = new protocol.protocol.Vec2()
                food.x = x
                food.y = y
                let req = protocol.protocol.EatFoodReq.create({
                    food
                })
                let buf = protocol.protocol.EatFoodReq.encode(req).finish();
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
        let pid = PlayerManager.getInstance().getPlayerId();
        let myGamePlayer = this._gameplayers[pid];

        if (gameplay == myGamePlayer) {
            if (this._mold == GAME_MOLD.STAND_ALONE) {
                EventX.emit("NotifyGameOver");
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
            let notify = protocol.protocol.NotifyGameStart.create({
                seat: 1,
                players: [PlayerManager.getInstance().getPlayerId()]
            });
            let buf = protocol.protocol.NotifyGameStart.encode(notify).finish();
            EventX.emit("NotifyGameStart", null, buf);
            this._isPlayer = true;
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
            this.showErr("请输入房间号")
            return
        }

        let lookon = node.parent.getChildByPath("lookon")
        this._isPlayer = !lookon.getComponent(Toggle).isChecked

        let req = protocol.protocol.EnterGameReq.create({
            isPlayer: this._isPlayer,
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
                if (res.code) {
                    this.showErr(res.msg)
                    return
                }
                this._lastFrameIndex = res.currFrameIndex
                if (res.running) {
                    let players = res.players.filter((p) => p.isPlayer).map((p) => p.pid)
                    this.initGamePlay(res.seat, players)
                } else {
                    this.showErr("等待其他玩家加入...")
                }
            }
        })
    }

    initGamePlay(seat: number, players: number[]) {
        this.settings.active = false;
        let others = 0
        for (let pid of players) {
            this._gameplayers[pid] = this.createGamePlay()
            if (pid == PlayerManager.getInstance().getPlayerId() || seat < 2) {
                this._gameplayers[pid].node.setPosition(0, 200)
                if (this._mold == GAME_MOLD.STAND_ALONE) {
                    this.onEatFoodNotify(this._gameplayers[pid], 0, 0)
                }
            } else {
                this._gameplayers[pid].node.setScale(0.5, 0.5, 1)
                let x = (others - 0.5) * 375
                let y = this._isPlayer ? -520 : 0;
                console.log("others pos ", x, y);
                this._gameplayers[pid].node.setPosition(x, y);
                others += 1;
            }
        }

        this._handleBroastframe()
    }

    createGamePlay(): GamePlay {
        let n = instantiate(this.gameplayprefab);
        n.parent = this.node;
        let gameplay = n.getComponent(GamePlay)
        return gameplay
    }

    startLocGame() {
        let pid = PlayerManager.getInstance().getPlayerId()
        this.schedule(() => {
            let myGamePlayer = this._gameplayers[pid]
            if (myGamePlayer) {
                let dir = this.directions.pop()
                myGamePlayer.framed(dir)
            }
        }, FRAME_DELTA_TIME)
    }

    private _handleBroastframe() {
        EventX.on("BroadcastFrame", (header: protocol.protocol.Header, data: Uint8Array) => {
            let notify = protocol.protocol.BroadcastFrame.decode(data);
            this._lastFrameIndex = notify.index;
            this._queueFrames.push(notify)
            if (this._queueFrames.length > 1) {
            } else {
                this._handleFrame()
            }
        })
    }

    private showErr(err: string) {
        let nn = this.settings.getChildByName("errmsg")
        if (nn) {
            nn.getComponent(Label).string = err
            nn.active = true
        }
    }
    private _handleFrame() {
        if (this._currFrameIndex == this._lastFrameIndex) {
            return
        }
        this._updateFrame()
    }

    private _updateFrame() {
        if (this._currFrameIndex == this._lastFrameIndex) return
        // 同步帧
        if (this._queueFrames.length == 0) {
            let start = this._currFrameIndex + 1
            let end = Math.min(600, this._lastFrameIndex - this._currFrameIndex) + this._currFrameIndex  // 单词最多同步100帧
            this._sysncFrames(start, end)
            return
        }

        do {
            let frame = this._queueFrames[0]
            if (frame.index <= this._currFrameIndex) { // 已处理
                this._queueFrames.shift()
                continue
            }
            if (frame.index - this._currFrameIndex === 1) {
                this._frameWork(frame)
                this._queueFrames.shift()
                continue
            } else {
                let start = this._currFrameIndex + 1
                let end = Math.min(600, frame.index - this._currFrameIndex) + this._currFrameIndex + 1  // 单词最多同步100帧
                this._sysncFrames(start, end)
                break
            }
        } while (this._queueFrames.length > 0)
    }

    private _sysncFrames(start: number, end: number) {
        let req = protocol.protocol.SysncFramesReq.create({
            start,
            end: end + 1
        })
        let buf = protocol.protocol.SysncFramesReq.encode(req).finish()
        Network.getInstance().sendmsg("SysncFramesReq", buf, (err, data) => {
            if (err) {
                console.error(err)
                return
            }

            if (data) {
                let res = protocol.protocol.SysncFramesRes.decode(data)
                if (res.code) { /** 同步错误 */
                    console.error(res)
                    return
                }
                // 往前插入，防止请求过程中，新的帧插入
                this._queueFrames = res.frames.concat(this._queueFrames)
                this._queueFrames.sort((a, b) => a.index - b.index)
                this._updateFrame()
            }
        })
    }

    private _frameWork(frame: protocol.protocol.IBroadcastFrame) {
        this._currFrameIndex = frame.index
        for (let p of frame.players) {
            let gameplay = this._gameplayers[p.pid]
            if (gameplay) {
                gameplay.framed(p.direction)
                if (p.newfood) {
                    gameplay.addFood(p.newfood.x, p.newfood.y)
                }
            }
        }
    }
}
