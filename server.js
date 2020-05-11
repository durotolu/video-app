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
        this.emit('createPeer')
      }
    }
    else 
      this.emit('sessionActive')
    
    clients++
  })
  // })
  // })
  socket.on('offer', sendOffer)
  socket.on('answer', sendAnswer)
  socket.on('disconnect', disconnect)
})

function disconnect() {
  if(clients > 0) clients--
}

function sendOffer(offer) {
  this.broadcast.emit('backOffer', offer)
}

function sendAnswer(answer) {
  this.broadcast.emit('backOffer', answer)
}

http.listen(port, () => console.log(`Active on ${port}`))