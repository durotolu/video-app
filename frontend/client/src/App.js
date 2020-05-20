import React, { useState, useEffect, useRef } from 'react';
import { Route } from 'react-router-dom';

import io from 'socket.io-client';
import Peer from 'simple-peer';
import styled from 'styled-components';

import logo from './logo.svg';
import './App.css';

import Dashboard from './components/Dashboard'
import Call from './components/Call'


function App() {

  return (
    <div className="App">
      <div className="App-header">
        <Route exact path="/" component={Dashboard} />
        <Route path="/call" component={Call} />
      </div>
    </div>
  );
}

export default App;
