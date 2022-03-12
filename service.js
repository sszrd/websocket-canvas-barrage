const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8000 });
wss.on("connection", ws => {
    ws.on("message", message => {
        Array.from(wss.clients).forEach(client => {
            client.send(message);
        })
    })
})