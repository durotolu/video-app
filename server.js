require('dotenv').config();

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT;

// app.use(express.static(__dirname + '/frontend/client/build'))
let clients = 0

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/frontend/client/public/index.html')
// });

io.on('connection', function (socket) {
  socket.on("joinRoom", function (roomId, userId) {
    console.log(roomId, userId)
    socket.join(roomId)
    socket.to(roomId).broadcast.emit('userConnected', userId)

    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('userDisconnected', userId)
    })
  })
})

http.listen(port, () => console.log(`Active on localhost:${port}`))