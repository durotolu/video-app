import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';
import Peer from 'simple-peer';

const socket = io()

function App() {

  const [streamData, setStreamData] = useState('')
  const [peerVideo, setPeerVideo] = useState(true)
  let client = {}

  // get stream
  navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
      socket.emit('NewClient')
      // video.srcObject = stream;
      setStreamData({streamData: stream})

      // to initialize a peer
      function initPeer(type) {
        let peer = new Peer({ initiator: (type === 'init') ? true : false, stream: stream, trickle: false })
        peer.on('stream', function (stream) {
          createVideo(stream)
        })
        peer.on('close', function () {
          //
          peer.destroy()
        })
        return peer
      }

      // create peer of type init
      function makePeer() {
        client.gotAnswer = false
        let peer = initPeer('init')
        peer.on('signal', function(data) {
          if(!client.gotAnswer) {
            socket.emit('offer', data)
          }
        })
        client.peer = peer
      }

      // for peer of type not init
      function frontAnswer(offer) {
        let peer = initPeer('not init')
        peer.on('signal', (data) => {
          socket.emit('Answer', data)
        })
        peer.signal(offer)
      }

      function signalAnswer(answer) {
        client.gotAnswer = true
        let peer = client.peer
        peer.signal(answer)
      }

      function createVideo(stream) {
        setPeerVideo({ peerVideo: false })
      }

      function sessionActive() {
        console.log('session active. please come back later')
      }

      socket.on('BackOffer', frontAnswer)
      socket.on('BackAnswer', signalAnswer)
      socket.on('SessionActive', sessionActive)
      socket.on('CreatePeer', makePeer)

    })
    .catch(err => console.log('swag', err))

  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="video-container">
            <div className="embed-responsive">
              <video srcobject={streamData} className="embed-responsive-item" muted autoPlay></video>
            </div>
          </div>
          <div className="video-container">
            <div className="embed-responsive">
              <video hidden={peerVideo} className="embed-responsive-item" muted autoPlay></video>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
