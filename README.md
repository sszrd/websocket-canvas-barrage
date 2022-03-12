## 如何使用
1. 运行 service.js 文件
2. 将 client.html 文件的 url 端口号改为 service.js 中配置的端口号，默认都不需要修改 
3. 用浏览器打开多个 client.html 页面进行测试
## 实现思路
1. 利用 canvas 绘制弹幕
2. 对每条弹幕封装，使它们能够自己保存自己的坐标、文本、偏移量
3. 通过 requestAnimationFrame 使 canvas 根据浏览器的刷新率更新。每次更新清空画布，遍历弹幕列表将每个弹幕其水平坐标减去其偏移量，并根据弹幕对象自身的属性重新绘制，当弹幕离开画布时将其从弹幕列表中移除
4. 使用 websocket 协议，客户端发送文本，服务端收到后广播到与之连接的客户端，客户端收到消息后实例化弹幕加入弹幕列表