# Cocos Create kcp插件
## 一、插件介绍
kcp插件基于Cocos Creator 3.8.3版本开发，kcp插件基于[libkcp](https://github.com/xtaci/libkcp)开发。
kcp插件提供了kcp协议封装，方便开发者使用kcp协议进行网络通信。
kcp详细文档： https://github.com/skywind3000/kcp

## 二、使用介绍
原生插件使用安装可参考Cocos官方文档：https://docs.cocos.com/creator/3.8/manual/zh/advanced-topics/native-plugins/brief.html
kcp逻辑实现主要在C++层实现，在typescript层调用C++层函数。接口调用方式基本与WebSocket一致. 接口定义如下
```
declare class KcpSocket {
    constructor(url: string, port: number, dataShards?: number, parityShards?: number);
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
```

