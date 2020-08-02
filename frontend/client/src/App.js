import React, { useState, useEffect, useRef } from 'react';
import { Link, Route } from "react-router-dom";
import { AiFillCaretRight } from 'react-icons/ai'

import io from 'socket.io-client';
import Peer from 'simple-peer';
import styled from 'styled-components';

import logo from './logo.svg';
import './App.css';

import Dashboard from './components/Dashboard'
import Call from './components/Call'


function App() {
  const [createInput, setCreateInput] = useState(true)
  const [joinInput, setJoinInput] = useState(true)
  const [inputFeild, setInputField] = useState('')
  const [roomId, setRoomId] = useState('')

  const handleChange = (e) => {
    setInputField(e.target.value)
    console.log(inputFeild)
  }

  const handleRoomUrl = (uniqueRoomId) => {
    console.log(uniqueRoomId)
  }

  return (
    <div className="App">
      <div className="App-header">
        <Route exact path="/" render={props =>
          <Dashboard {...props}
            createInput={createInput}
            roomId={roomId}
            setRoomId={setRoomId}
            handleChange={handleChange}
            handleRoomUrl={handleRoomUrl} />} />
        <Route path="/call" render={props => <Call {...props} inputFeild={inputFeild} roomId={roomId} />} />
      </div>
    </div>
  );
}

export default App;
