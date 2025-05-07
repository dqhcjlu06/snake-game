import { EventX } from "../base/EventX";
import { NetworkEvent } from "../network/NetworkEvent";

export default class PlayerManager{
    private _playerId: number = 0;
    private static _sInstance: PlayerManager;

    static getInstance() {
        if (this._sInstance == null) {
            this._sInstance = new PlayerManager();
        }
        
        return this._sInstance;
    }

    constructor() {
        EventX.on(NetworkEvent.Disconnected, (ev:any) => {
            console.log('network disconnect', ev)
        }) 
        
        EventX.on(NetworkEvent.Connected, () => {
            console.log('network connected')
        })

        EventX.on(NetworkEvent.NetworkError, (ev) => {
            console.log('network error', ev)
        })
    }

    setPlayerId(playerId: number) {
        this._playerId = playerId;
    }

    getPlayerId(): number {
        return this._playerId;
    }
}