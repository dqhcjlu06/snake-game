import { _decorator, Component, EditBox, Node, Socket } from 'cc';
import { NATIVE } from 'cc/env';
const { ccclass, property } = _decorator;

/**
 * 原生插件开发教程
 * https://docs.cocos.com/creator/3.8/manual/zh/advanced-topics/native-secondary-development.html
 * cmake 下载地址
 */

@ccclass('Start')
export class Start extends Component {
    @property(EditBox)
    editTxt: EditBox = null;

    _kcp: KcpSocket = null;
    start() {
        if (NATIVE) {
            if (typeof KcpSocket === 'undefined') {
                console.error('FAILED: class is not exported, native plugin not enabled?')
            } else {
                this._kcp = new KcpSocket("127.0.0.1", 9999, 2, 2)
                // this._kcp.isBinary = true;
                
                this._kcp .onopen =  () => {
                    console.log('udp open success')
                    // this._kcp .send("hello kcp")
                    
                    // const buf = new Uint8Array(10); // Create a Uint8Array with a length of 10
                    // for (let i = 0; i < buf.length; i++) {
                    //     buf[i] = 97 + i
                    // }

                  //  k.send(buf);
                }

                this._kcp .onmessage = (evt) => {
                    console.log("----receive message:---- ", evt.data.toString())
                }

                console.log("hello kcp example")
            }
        }
    }

    update(deltaTime: number) {
    }

    onClick() {
        this._kcp.send(this.editTxt.string || "empty");
    }
}
