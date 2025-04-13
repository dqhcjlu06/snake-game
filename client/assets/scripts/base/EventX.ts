interface IListener {
    cb: Function;
    obj?: any;
    once?: boolean;
}

export class EventX {
    private static map: { [evt: string]: Array<IListener> } = {};
    private static arr: Array<IListener> = [];

    private constructor() { }

    private static listen(evt: string | number, listener: IListener) {
        let listeners = this.map[evt];
        if (!listeners) {
            this.map[evt] = [listener];
            return;
        }
        for (let v of listeners) {
            if (v.cb == listener.cb && v.obj == listener.obj) {
                console.error("Listen event:", evt, "already has listener");
                return;
            }
        }
        listeners.push(listener);
    }

    public static onAll(callback: Function, target?: any) {
        let listener: IListener = { cb: callback, obj: target };
        let exists: boolean = this.arr.some(v => v.cb == listener.cb && v.obj == listener.obj);
        if (exists) return;
        this.arr.push(listener);
    }

    public static on(evt: string | number, callback: Function, target?: any) {
        if (!callback) {
            console.error("On event:", evt, "callback is invalid!");
            return;
        }
        // console.debug("On event:", evt);
        this.listen(evt, { cb: callback, obj: target, once: false });
    }

    public static once(evt: string | number, callback: Function, target?: any) {
        if (!callback) {
            console.error("Once event:", evt, "callback is invalid!");
            return;
        }
        // console.debug("Once event:", evt);
        this.listen(evt, { cb: callback, obj: target, once: true });
    }

    public static off(evt: string | number, callback: Function, target?: any) {
        let listeners = this.map[evt];
        if (listeners) {
            for (let i = 0; i < listeners.length; ++i) {
                let v = listeners[i];
                if (v.cb == callback && v.obj == target) {
                    listeners.splice(i, 1);
                    return;
                }
            }
            console.warn("Off event:", evt, "no listener!");
        }
    }

    public static offAll(target: any) {
        if (!target) {
            console.error("OffAll target event failed, tartget is invalid!");
            return;
        }
        for (let evt in this.map) {
            let listeners = this.map[evt];
            for (let i = listeners.length - 1; i >= 0; --i) {
                let v = listeners[i];
                if (v.obj == target) {
                    listeners.splice(i, 1);
                }
            }
        }
    }

    public static emit(evt: string | number, ...argvs: any[]) {
        let listeners = this.map[evt];
        if (!listeners) {
            // console.warn(`Emit Event: ${evt} failed, no listeners!`);
            listeners = [];
        }
        let succeedCount = 0;
        let errorCount = 0;
        for (let i = listeners.length - 1; i >= 0; --i) { // 倒序遍历，方便删除
            let v = listeners[i];
            // try {
                if (v.obj) {
                    v.cb.call(v.obj, ...argvs);
                } else {
                    v.cb(...argvs);
                }
                succeedCount++;
            // } catch (e) {
            //     errorCount++;
            //     console.error("Exception:", e);
            // }
            if (v.once) {
                listeners.splice(i, 1);
            }
        }
        this.arr.forEach(listener => listener.obj ? listener.cb.call(listener.obj, evt, ...argvs) : listener.cb(evt, ...argvs));
        succeedCount += this.arr.length;
        if (succeedCount + errorCount == 0) {
            // console.warn("Unhandled Event:", evt);
            return;
        }
        // if (succeedCount > 0) {
        // console.info("Emit event:", evt, "succeedCount:", succeedCount);
        // }
        if (errorCount > 0) {
            console.error("Emit event:", evt, "errorCount:", errorCount);
        }
    }
}
