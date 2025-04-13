import { _decorator, Component, EditBox, Node } from 'cc';
import Network from '../network/Network';
import protocol from '../protocols/protocol.js';
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
                    console.log(`response:`, res)
                }
            })
        })
    }
}
