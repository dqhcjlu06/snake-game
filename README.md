# 贪吃蛇大作战
[视频演示](https://www.bilibili.com/video/BV1m5VbzkEjn/?vd_source=aa0f6f25117036c7bbb858afd3575714) <br/>
基于经典贪吃蛇玩法打造的多人对战Demo，深度剖析帧同步架构与KCP协议实现。适用于技术学习与方案验证，不建议直接用于生产环境。

【技术架构】<br/>
▶ 服务端：Golang高性能协程模型
* 基于goroutine的并发架构
* 自定义事件分发机制
* kcp框架： [kcp-go](https://github.com/xtaci/kcp-go)

▶ 客户端：Cocos Creator 3.8.3
* kcp框架基于[libkcp](https://github.com/xtaci/libkcp), 并以Cocos原生插件方式接入

▶ 通信协议：支持WebSocket/KCP
* 不支持kcp的情况下， 可以无感使用WebSocket

## protocol协议

1. 服务端
protocols目录下运行
```
protoc --go_out=../server --proto_path=. protocol.proto
```

2. 客户端

```
npm install

npm run buildproto
```

