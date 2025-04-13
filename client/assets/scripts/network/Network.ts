import { NATIVE } from "cc/env";

import { EventX } from "../base/EventX";
import protocol from "../protocols/protocol.js";

export type ResponseBack = (err: Error, data?: Uint8Array) => void;
export type ConnectCallback = (err?: Error) => void;

export interface ConnectOptions {
    url: string;
    port: number;
    dataShards?: number;
    parityShards?: number;
}

const MESSAGE_HEAD_ADVANCE_MASK = 2147483648
const MAX_REQUEST_TIMEOUT = 2000


// header: len, cmd, sn, flag

export default class Network {
    private _socket: WebSocket | KcpSocket = null;
    private _sn: number = 0;
    private _cache: Uint8Array = null;
    private _callbacks: Map<number, ResponseBack> = new Map<number, ResponseBack>()

    static sInstance: Network;
    static getInstance() {
        if (Network.sInstance == null) {
            Network.sInstance = new Network();
        }

        return Network.sInstance;
    }

    private constructor() {
    }

    createConnect(options: ConnectOptions, callback?: ConnectCallback) {
        if (this._socket) {
            this._socket.close()
            this._socket.onclose = () => { }
            this._socket = null
        }

        if (options.url.startsWith("ws")) {
            this._socket = new WebSocket(options.url)
        } else if (NATIVE && typeof KcpSocket !== 'undefined') {
            this._socket = new KcpSocket(options.url, options.port, options.dataShards || 2, options.parityShards || 2)
        } else {
            callback && callback(new Error('protocol error'))
            return
        }

        this._socket.onopen = () => {
            callback && callback()
        }

        this._socket.onclose = (ev) => {
        }

        this._socket.onmessage = async (evt: MessageEvent) => {
            let received_msg
            if (NATIVE) {
                received_msg = evt.data
            } else {
                received_msg = await evt.data.arrayBuffer()
            }
            const buf = new Uint8Array(received_msg)
            this.onmessage(buf)
        }
    }

    /**
    *    -----------------------------------------------------
    *    |  消息总长度  |  消息体长度  |  消息头  |    消息体     | 
    *    -----------------------------------------------------
    */
    onmessage(data: Uint8Array) {
        if (!this._cache) {
            this._cache = data;
        } else {
            this._cache.set(data, this._cache.length);
        }

        let readBytes = 0;
        while (this._cache.length > readBytes) {
            let nDataLen = this._readUint32BE(this._cache, readBytes);
            if (nDataLen > MESSAGE_HEAD_ADVANCE_MASK) {
                this._cache = null;
                this._socket.close();
                console.error('socket body length is too big');
                return;
            }

            if (readBytes + nDataLen < this._cache.length) {
                break;
            }

            let msg = this._cache.subarray(readBytes + 4, readBytes + nDataLen);
            let bodylength = this._readUint32BE(msg, 0);
            if (bodylength + 4 > nDataLen || bodylength > msg.length) {
                console.error("body big then packet");
                this._socket.close();
                return;
            }

            const headerlen = msg.length - bodylength - 4;
            const headerbytes = msg.subarray(4, headerlen + 4);
            const header = protocol.protocol.Header.decode(headerbytes);
            if (this._callbacks.has(header.sn)) {
                EventX.emit(header.sn, bodylength > 0 ? msg.subarray(headerlen + 4) : null);
            } else {
                EventX.emit(header.cmd, header, bodylength > 0 ? msg.subarray(headerlen + 4): null);
            }

            readBytes += nDataLen;
        }

        if (this._cache.length == readBytes) {
            this._cache = null;
        } else {
            this._cache = this._cache.subarray(readBytes);
        }
    }

    sendmsg(cmd: string, data: Uint8Array | null, callback?: ResponseBack) {
        const sn = this._genSn();
        const header = protocol.protocol.Header.create({ cmd: cmd, sn: sn });
        const headerbytes = protocol.protocol.Header.encode(header).finish();
        const bodylength = data ? data.length : 0;

        let sendbuf = new Uint8Array(4 + headerbytes.length + bodylength);
        let bodylenbuf = new Uint32Array(1);
        bodylenbuf[0] = bodylength;

        let offset = 0;
        offset = this._writeBufferBE(bodylenbuf.buffer, sendbuf, offset);

        for (let i = 0; i < headerbytes.length; i++) {
            sendbuf[offset + i] = headerbytes[i]
        }

        offset += headerbytes.length

        if (!!data) {
            for (let i = 0; i < data.length; i++) {
                sendbuf[offset + i] = data[i];
            }
        }

        const lengbuf = new Uint32Array(1);
        lengbuf[0] = 4 + sendbuf.length;

        const buf = new Uint8Array(4 + sendbuf.length);
        offset = this._writeBufferBE(lengbuf.buffer, buf, 0);
        buf.set(sendbuf,offset);

        if (!!callback) {
            this._callbacks.set(sn, callback);
            let timeid = setTimeout(() => {
                callback(new Error(`${header.cmd} timeout`), null);
                this._callbacks.delete(sn);
            }, MAX_REQUEST_TIMEOUT);
            
            EventX.once(sn, (data: Uint8Array) => {
                clearTimeout(timeid);
                callback(null, data);
                this._callbacks.delete(sn);
            });
        }

        this._socket.send(buf);
    }

    _genSn() {
        this._sn++
        if (this._sn > 0x7fffffff) {
            this._sn = 1
        }
        return this._sn
    }

    _writeBufferBE(buffer: ArrayBufferLike, data: Uint8Array, offset: number): number {
        let bf8 = new Uint8Array(buffer)
        for (let i = 0; i < bf8.length; i++) {
            data[offset + i] = bf8[bf8.length - 1 - i]
        }
        return offset + bf8.length
    }

    _readUint32BE(data: Uint8Array, offset: number) {
        if (offset + 4 > data.length) return 0
        let num = data[offset] * Math.pow(2, 24) + data[offset + 1] * Math.pow(2, 16)
            + data[offset + 2] * Math.pow(2, 8) + data[offset + 3]
        return num
    }
}
