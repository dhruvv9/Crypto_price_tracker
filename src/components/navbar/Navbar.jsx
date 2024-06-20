import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import arrowicon from '../../assets/arrow_icon.png';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt='' className='logo'/>
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Priceing</li>
            <li>Blog</li>
        </ul>
        <div className='nav-right'>
            <select>
                <option value='USD'>USD</option>
                <option value='USD'>EURO</option>
                <option value='USD'>INR</option>
            </select>
            <button>Sign up <img src={arrowicon} alt=''/></button>
        </div>
      
    </div>
  )
}

export default Navbar
