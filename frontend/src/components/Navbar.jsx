import React from 'react'
import'./Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/service">service</Link></li>
                <li><Link to="/useState">usestate</Link></li>
                <li><Link to="/useeffect">UseEffect</Link></li>
                
                </ul>
        </nav>
    </div>
  )
}
export default Navbar

