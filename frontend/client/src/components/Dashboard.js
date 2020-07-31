import React, { useState } from 'react';
import { Link, Route } from "react-router-dom";
import { AiFillCaretRight } from 'react-icons/ai'
import { v4 as uuidV4} from 'uuid'

import Call from './Call'

function Dashboard({ handleChange }) {
  const [createInput, setCreateInput] = useState(true)
  const [joinInput, setJoinInput] = useState(true)

  return (
    <div>
      <h2>Welcome to some Video Peer-to-Peer App</h2>
      <div>
        <button onClick={() => createInput ? setCreateInput(false) : setCreateInput(true)}>create room</button>
        <input onChange={handleChange} placeholder='enter id for new room' hidden={createInput} />
        <Link to={`/call/${uuidV4()}`} hidden={createInput}><AiFillCaretRight /></Link>
      </div>
      <div>
        <button onClick={() => joinInput ? setJoinInput(false) : setJoinInput(true)}>join room</button>
        <input onChange={handleChange} placeholder='enter id for new room' hidden={joinInput} />
        <Link hidden={joinInput}><AiFillCaretRight /></Link>
      </div>
    </div>
  )
}

export default Dashboard