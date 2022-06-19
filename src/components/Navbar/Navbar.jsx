import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <a href="#">
            <span className="logo">MyBooking</span>
            </a>
            <div className="navItems">
                <ul className="navLinks">
                    <li className='link'>
                        <button type='button'>Login </button>
                    </li>
                    <li className='link'>
                        <button type='button'>Register</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar