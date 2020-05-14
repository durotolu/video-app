require('dotenv').config();

const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = process.env.PORT

app.use(express.static(__dirname + '/frontend/client/build'))
let clients = 0

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/frontend/client/public/index.html')
})

io.on('connection', function(socket) {
  socket.on("NewClient", function() {
    if(clients < 2) {
      if(clients === 1) {
        this.emit('CreatePeer')
      }
    }
    else 
      this.emit('SessionActive')
    clients++
  })
  socket.on('Offer', sendOffer)
  socket.on('Answer', sendAnswer)
  socket.on('Disconnect', disconnect)
})

function disconnect() {
  if(clients > 0) {
    clients--
    // this.broadcast("RemoveVideo")
  }
}

function sendOffer(offer) {
  this.broadcast.emit('BackOffer', offer)
}

function sendAnswer(answer) {
  this.broadcast.emit('BackAnswer', answer)
}

http.listen(port, () => console.log(`Active on localhost:${port}`))