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
    }

    setPlayerId(playerId: number) {
        this._playerId = playerId;
    }

    getPlayerId(): number {
        return this._playerId;
    }
}