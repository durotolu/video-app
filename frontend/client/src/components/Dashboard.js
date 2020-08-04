import React, { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";
import { AiFillCaretRight } from 'react-icons/ai'
import { v4 as uuidV4 } from 'uuid'

import Call from './Call'

function Dashboard({ handleChange, handleRoomUrl, roomId, setRoomId, inputFeild }) {
  const [createInput, setCreateInput] = useState(true)
  const [joinInput, setJoinInput] = useState(true)

  useEffect(() => {
    setRoomId(uuidV4())
  }, [])

  const handleClick = (input) => {
    if (input) {
      setCreateInput(false)
    } else {
      setCreateInput(true)
    }
  }

  return (
    <div>
      <h2>Welcome to some Video Peer-to-Peer App</h2>
      <div>
        <Link to={`/call/${roomId}`}>
          <button onClick={() => handleClick(createInput)} >create room</button>
        </Link>
      </div>
      <div>
        <button onClick={() => joinInput ? setJoinInput(false) : setJoinInput(true)}>join room</button>
        <input onChange={handleChange} placeholder='Enter room id' hidden={joinInput} />
        <Link to={`/call/${inputFeild}`} hidden={joinInput}><AiFillCaretRight /></Link>
      </div>
    </div>
  )
}

export default Dashboard