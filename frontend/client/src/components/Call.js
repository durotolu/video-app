import React, { useState, useEffect, useRef } from 'react';

import io from 'socket.io-client';
import Peer from 'simple-peer';
import styled from 'styled-components';

import logo from '../logo.svg';
import '../App.css';
import Dashboard from './Dashboard'

function Call(props) {
  debugger
  const socket = io()

  let streamDataREf = useRef()
  let peerStreamDataRef = useRef()
  let client = {}

  useEffect(() => {

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
            // trickle: true,
            // config: {
            //   iceServers: [
            //     { urls: 'stun:stun.l.google.com:19302' },
            //     { urls: 'stun:global.stun.twilio.com:3478?transport=udp' },
            //     { 'url': 'turn:192.158.29.39:3478?transport=udp',
            //       'credential': 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
            //       'username': '28224511:1379330808'
            //     },
            //     {
            //       'url': 'turn:192.158.29.39:3478?transport=tcp',
            //       'credential': 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
            //       'username': '28224511:1379330808'
            //     }
            //   ]
            // }

            // config: '{"rtcpMuxPolicy":"require","bundlePolicy":"max-bundle","iceServers":[{"urls":["stun:74.125.140.127:19302","stun:[2a00:1450:400c:c08::7f]:19302"]},{"urls":["turn:209.85.203.127:19305?transport=udp","turn:[2a00:1450:400b:c03::7f]:19305?transport=udp","turn:209.85.203.127:19305?transport=tcp","turn:[2a00:1450:400b:c03::7f]:19305?transport=tcp"],"username":"CLXnjvYFEgZZTdGSvSQYzc/s6OMTIICjBQ","credential":"80aSa59oAHNC2ZB7qxekT4vVmWQ=","maxRateKbps":"8000"}],"certificates":[{}]}';
          })
          peer.on('error', function (err) {
            console.log(err)
          })
          peer.on('stream', function (peerStream) {
            createVideo(peerStream)
          })
          peer.on('close', function () {
            peerStreamDataRef.connect.srcObject = null
            // socket.emit('Disconnect')
            peer.destroy()
          })
          return peer
        }

        function removeVideo() {
          peerStreamDataRef.connect.srcObject = null
          socket.emit('Disconnect')
        }

        // create peer of type init
        function makePeer() {
          client.gotAnswer = false
          let peer = initPeer('init')
          peer.on('signal', function (data) {
            if (!client.gotAnswer) {
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
          client.gotAnswer = true
          let peer = client.peer
          peer.signal(answer)
        }

        function createVideo(stream) {
          debugger
          peerStreamDataRef.current.srcObject = stream
        }

        function sessionActive() {
          console.log('session active. please come back later')
        }

        socket.on('BackOffer', frontAnswer)
        socket.on('BackAnswer', signalAnswer)
        socket.on('SessionActive', sessionActive)
        socket.on('CreatePeer', makePeer)
        socket.on('RemoveVideo', removeVideo)

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