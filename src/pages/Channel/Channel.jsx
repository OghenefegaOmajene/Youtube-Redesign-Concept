import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import channelBanner from '../../assets/channelBanner.png'
import './Channel.css'

const Channel = () => {
  return (
    <>
      <Navbar/>
      <div className='channelPage'>
          <Sidebar/>
          <div className="channel">
            <img src={channelBanner} alt="" className='channelBanner'/>
          </div>
      </div>
    </>
  )
}

export default Channel