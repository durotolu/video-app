import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';
import Peer from 'simple-peer';


function App() {
  const socket = io()
  // const [streamData, setStreamData] = useState({})
  const [peerVideo, setPeerVideo] = useState(true)
  // const [video, setVideo] = useState(true)
  let streamDataREf = useRef()
  let peerStreamDataRef = useRef()
  let client = {}

  useEffect(() =>{
    
    // get stream
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
      socket.emit('NewClient');

      streamDataREf.current.srcObject = stream

      // used to initialize a peer
      function initPeer(type) {
        let peer = new Peer({
          initiator: (type === 'init') ? true : false,
          stream: stream,
          trickle: true,
          config: {
            iceServers: [
              { urls: 'stun:stun.l.google.com:19302' },
              { urls: 'stun:global.stun.twilio.com:3478?transport=udp' },
              { url: 'turn:homeo@turn.bistri.com:80', credential: 'homeo' },
              { 'url': 'turn:192.158.29.39:3478?transport=udp',
                'credential': 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
                'username': '28224511:1379330808'
              },
              {
                'url': 'turn:192.158.29.39:3478?transport=tcp',
                'credential': 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
                'username': '28224511:1379330808'
              }
            ]
          }
        })
        peer.on('stream', function (peerStream) {
          createVideo(peerStream)
        })
        peer.on('close', function () {
          peerStreamDataRef.connect.srcObject = null
          socket.emit('Disconnect')
          peer.destroy()
        })
        return peer
      }

      // create peer of type init
      function makePeer() {
        client.gotAnswer = false
        let peer = initPeer('init')
        peer.on('signal', function(data) {
          debugger
          if(!client.gotAnswer) {
            socket.emit('Offer', data)
          }
        })
        client.peer = peer
      }

      // for peer of type not init
      function frontAnswer(offer) {
        let peer = initPeer('notinit')
        peer.on('signal', (data) => {
          socket.emit('Answer', data)
        })
        peer.signal(offer)
      }
      
      function signalAnswer(answer) {
        debugger
        client.gotAnswer = true
        let peer = client.peer
        peer.signal(answer)
      }
      
      function createVideo(stream) {
        debugger
        setPeerVideo(false)
        peerStreamDataRef.current.srcObject = stream
      }
      
      function sessionActive() {
        console.log('session active. please come back later')
      }
      
      socket.on('BackOffer', frontAnswer)
      socket.on('BackAnswer', signalAnswer)
      socket.on('SessionActive', sessionActive)
      socket.on('CreatePeer', makePeer)
      // socket.on('RemoveVideo', RemoveVideo)
      
    })
    .catch(err => {
      console.log('swag', err)
    })
  }, [])
    
    return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="video-container">
            <div className="embed-responsive">
              <video width='400px' ref={streamDataREf} className="embed-responsive-item" muted autoPlay>
              </video>
            </div>
          </div>
          <div className="video-container">
            <div className="embed-responsive">
              <video width='400px' ref={peerStreamDataRef} className="embed-responsive-item" autoPlay></video>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
