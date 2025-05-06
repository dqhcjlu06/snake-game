import { _decorator, Component, director, EditBox, Node } from 'cc';
import Network from '../network/Network';
import protocol from '../protocols/protocol.js';
import PlayerManager from '../manager/playermanager';
const { ccclass, property } = _decorator;

@ccclass('LoginCtrl')
export class LoginCtrl extends Component {
    @property(EditBox)
    serverurl: EditBox = null

    @property(EditBox)
    port: EditBox = null

    @property(EditBox)
    account: EditBox = null

    start() {
    }

    onLogin() {
        Network.getInstance().createConnect({
            url: this.serverurl.string,
            port: parseInt(this.port.string)
        }, (err) => {
            if (err) {
                return console.error(err)
            }
            console.log('connect server success')
            const req = protocol.protocol.LoginReq.create({
                account: this.account.string
            })

            const buf = protocol.protocol.LoginReq.encode(req).finish()

            Network.getInstance().sendmsg("LoginReq", buf, (err, data) => {
                if (err) {
                    console.error()
                } else {
                    let res = protocol.protocol.LoginRes.decode(data)
                    console.log(`login response:`, JSON.stringify(res))
                    /** 进入游戏 */
                    if (!res.code) {
                        PlayerManager.getInstance().setPlayerId(res.pid)
                        director.loadScene("game")
                    }
                }
            })
        })
    }

    onSendHeart() {
        Network.getInstance().sendmsg("HeartReq", null, (err, data) => {
            if (err) {
                console.error()
            } else {
                console.log("heart response success", data)
                let res = protocol.protocol.HeartRes.decode(data)
                console.log(`login response:`, JSON.stringify(res))
            }
        })
    }
}
