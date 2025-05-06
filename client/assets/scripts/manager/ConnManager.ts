import { EventX } from "../base/EventX";
import { ConnectOptions } from "../network/Network";
import { NetworkEvent } from "../network/NetworkEvent";
import protocol from "../protocols/protocol.js";

const MAX_TRY_CONNECT_TIMES = 5

export default class ConnManager {
    private static _sInstance: ConnManager;
    private _uid: number = 0;
    private _options: ConnectOptions = null;
    private _tryConnectTimes: number = 0;

    static getInstance() {
        if (this._sInstance == null) {
            this._sInstance = new ConnManager();
        }
        
        return this._sInstance;
    }

    constructor() {
        EventX.on(NetworkEvent.Connected, () => {
        })

        EventX.on(NetworkEvent.Disconnected, () => {})

        EventX.on(NetworkEvent.NetworkError, () => {})

        /** 踢下线 */
        EventX.on("NotifyKickout", (header: protocol.protocol.Header, data: Uint8Array) => {
        })
    }

    connect(options: ConnectOptions) {
    }
}
