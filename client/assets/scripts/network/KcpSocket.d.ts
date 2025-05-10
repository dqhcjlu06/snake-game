declare class KcpSocket {
    constructor(url: string, port: number, dataShards?: number, parityShards?: number);
    // 消息循环处理间隔时间（ms) 默认5
    static WaitSleep: number;
    // onmessage data类型： 默认true
    isBinary: boolean;
    send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void;
    close():void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/close_event) */
    onclose: ((this: KcpSocket, ev: CloseEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/error_event) */
    onerror: ((this: KcpSocket, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/message_event) */
    onmessage: ((this: KcpSocket, ev: MessageEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/open_event) */
    onopen: ((this: KcpSocket, ev: Event) => any) | null;

    readonly readyState: number;
    readonly CONNECTING: 0;
    readonly OPEN: 1;
    readonly CLOSING: 2;
    readonly CLOSED: 3;
}
