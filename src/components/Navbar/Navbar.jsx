import React from 'react'
import './Navbar.css'
import Logo from '../../assets/Logo.png';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <i><IoMenu /></i>
        <img src={Logo} alt="" />
      </div>

      <input type="text" placeholder='Search' className='search'/>
    </div>
  )
}

export default Navbar;