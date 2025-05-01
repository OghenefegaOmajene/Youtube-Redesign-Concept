import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import { IoMenu } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { IoMdHome } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { RxClock } from "react-icons/rx";
import { FiThumbsUp } from "react-icons/fi";
import { CgPlayList } from "react-icons/cg";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FiGrid } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className='sideBar'>
        <div className='logo'>
            <i><IoMenu /></i>
            <img src={Logo} alt="" />
        </div>
        <div className='box1'>
            <Link to="/Home" ><i><IoMdHome /></i> Home</Link>
            <Link to="" ><i><MdOutlineExplore /></i>Explore</Link>
            <Link to="/Shorts" ><i><SiYoutubeshorts /></i> Shorts</Link>
            <Link to="" >TV Mode</Link>
        </div>
        <div className='box2'>
            <Link to="" > <i><MdHistory /></i>History</Link>
            <Link to="" > <i><RxClock /></i>Watch Later</Link>
            <Link to="" > <i><FiThumbsUp /></i>Liked Videos</Link>
            <Link to="" ><i><CgPlayList /></i>Playlists</Link>
        </div>
        <div className='box3'>
            <Link to="" ><i><FiGrid /></i>Collections</Link>
            <Link to="" > <i><MdOutlineSubscriptions /></i>Subscriptions</Link>
        </div>
    </div>
  )
}

export default Sidebar;