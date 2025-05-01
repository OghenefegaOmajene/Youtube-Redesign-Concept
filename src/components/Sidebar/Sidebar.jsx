import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import Logo from '../../components/img/Logo.png'

const Sidebar = () => {
  return (
    <div className='sideBar'>
        <div className='logo'>
            {Logo}
        </div>
        <div className='box1'>
            <Link to="/Home" >Home</Link>
            <Link to="" >Explore</Link>
            <Link to="/Shorts" >Shorts</Link>
            <Link to="" >TV Mode</Link>
        </div>
        <div className='box2'>
            <Link to="" >History</Link>
            <Link to="" >Watch Later</Link>
            <Link to="" >Liked Videos</Link>
            <Link to="" >Playlists</Link>
        </div>
        <div className='box3'>
            <Link to="" >Collections</Link>
            <Link to="" >Subscriptions</Link>
        </div>
    </div>
  )
}

export default Sidebar;