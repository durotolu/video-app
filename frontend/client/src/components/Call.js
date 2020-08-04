import React, { useState, useEffect, useRef } from 'react';

import io from 'socket.io-client';
// import Peer from 'simple-peer';
import Peer from 'peerjs';
import styled from 'styled-components';

import logo from '../logo.svg';
import '../App.css';
import Dashboard from './Dashboard';

function Call(props) {
  const socket = io('http://localhost:4000/')

  let streamDataREf = useRef()
  let peerStreamDataRef = useRef()
  const peers = {}

  useEffect(() => {
    const myPeer = new Peer()
    console.log(myPeer.call())
    myPeer.on('open', id => {
      socket.emit('joinRoom', props.roomId, myPeer.id);
    })

    // get stream
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        addVideoStream(streamDataREf, stream)

        myPeer.on('call', call => {
          call.answer(stream)
          call.on('stream', userVideoStream => {
            addVideoStream(peerStreamDataRef, userVideoStream)
          })
        })

        socket.on('userConnected', userId => {
          connectToNewUser(userId, stream)
        })

        socket.on('userDisconnected', userId => {
          if (peers[userId]) peers[userId].close()
        })

        function addVideoStream(videoRef, stream) {
          videoRef.current.srcObject = stream
        }

        function connectToNewUser(userId, stream) {
          const call = myPeer.call(userId, stream)
          call.on('stream', userVideoStream => {
            addVideoStream(peerStreamDataRef, userVideoStream)
          })
          call.on('close', () => {
            //video.remove()
            peerStreamDataRef = ''
          })

          peers[userId] = call
        }
      })
      .catch(err => {
        console.log('swag', err)
      })
  }, [])

  return (
    <div className="App">
      <div className="App-header">
        <Box className="row">
          <Row>
            <div className="video-container">
              <div className="embed-responsive">
                <Video ref={streamDataREf} className="embed-responsive-item" muted autoPlay>
                </Video>
              </div>
            </div>
            <div className="video-container">
              <div className="embed-responsive">
                <Video ref={peerStreamDataRef} className="embed-responsive-item" autoPlay></Video>
              </div>
            </div>
          </Row>
          <Row>
            <div className="video-container">
              <div className="embed-responsive">
                <Video className="embed-responsive-item" autoPlay></Video>
              </div>
            </div>
            <div className="video-container">
              <div className="embed-responsive">
                <Video className="embed-responsive-item" autoPlay></Video>
              </div>
            </div>
          </Row>
        </Box>
      </div>
    </div>
  );
}

const Box = styled.div`
 display: flex
`

const Row = styled.div`

`

const Video = styled.video`
  width: 70%;
  border: 2px solid black;
  transform: rotateY(180deg);
  /* safari an chrome */
  -webkit-transform: rotateY(180deg);
  /* Firefox */
  -moz-transform: rotateY(180deg)
`

export default Call;