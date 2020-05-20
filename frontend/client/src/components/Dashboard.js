import React from 'react';
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Welcome to some Video Peer-to-Peer App</h2>
      <Link to="/call">create room</Link>
      <Link to="/call">join room</Link>
    </div>
  )
}

export default Dashboard