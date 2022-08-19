import React from 'react'
import { Link } from 'react-router-dom'

function Gamebar() {
  return (
    <div className='navbar'>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/Games"> <li>Games</li></Link>
            <Link to="/Add"><li>AddGame</li></Link>
        </ul>
    </div>
  )
}

export default Gamebar