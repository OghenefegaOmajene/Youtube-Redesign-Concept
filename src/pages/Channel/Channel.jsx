import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import channelBanner from '../../assets/channelBanner.png'
import './Channel.css'
import juxtopposedChannel from '../../assets/juxtopposedChannel.png'
import juxtopposed from '../../assets/juxtopposed.png'
import x from '../../assets/x.png'
import ball from '../../assets/ball.png'
import figma from '../../assets/figma.png'

const Channel = () => {
  return (
    <>
      <Navbar/>
      <div className='channelPage'>
          <Sidebar/>
          <div className="channel">
            <img src={channelBanner} alt="" className='channelBanner'/>
            <div className="channelHead">
              <img src={juxtopposedChannel} alt="" className='channelProfileImg'/>
              <div className="channelStats">
                <p style={{fontSize: "28px"}}>Juxtopposed</p>
                <p style={{fontSize: "13px"}}>@juxtopposed . <span>295k</span> subscribers . <span>31</span> videos . <span>subscribe for more cats(and design content, of course)</span>...more</p>
              </div>

              <div className="quickActions">
                <div className="quickChannelLinks">
                  <img src={x} alt="" />
                  <img src={juxtopposed} alt="" />
                  <img src={ball} alt="" />
                  <img src={figma} alt="" />
                </div>
                
                <button className='channelSubscribeBtn'>
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.35123 17.0123C1.13772 17.0123 0.958785 16.9402 0.814434 16.7958C0.669915 16.6513 0.597656 16.4722 0.597656 16.2585C0.597656 16.045 0.669915 15.8661 0.814434 15.7217C0.958785 15.5775 1.13772 15.5054 1.35123 15.5054H2.41401V8.00815C2.41401 6.65691 2.83107 5.46217 3.66519 4.42392C4.49915 3.38566 5.56989 2.7216 6.87742 2.43172V1.80576C6.87742 1.45694 6.99941 1.16037 7.2434 0.916041C7.48739 0.671884 7.78363 0.549805 8.13212 0.549805C8.48077 0.549805 8.77742 0.671884 9.02208 0.916041C9.26691 1.16037 9.38932 1.45694 9.38932 1.80576V2.43172C10.6969 2.7216 11.7676 3.38566 12.6015 4.42392C13.4357 5.46217 13.8527 6.65691 13.8527 8.00815V15.5054H14.9155C15.129 15.5054 15.308 15.5776 15.4523 15.722C15.5968 15.8665 15.6691 16.0456 15.6691 16.2593C15.6691 16.4728 15.5968 16.6517 15.4523 16.7961C15.308 16.9402 15.129 17.0123 14.9155 17.0123H1.35123ZM8.13161 19.8334C7.63174 19.8334 7.20439 19.6556 6.84954 19.2999C6.49452 18.9442 6.31701 18.5166 6.31701 18.0171H9.94973C9.94973 18.5183 9.77172 18.9463 9.4157 19.3012C9.05968 19.656 8.63165 19.8334 8.13161 19.8334ZM3.92116 15.5054H12.3456V8.00815C12.3456 6.84497 11.9344 5.85218 11.112 5.02979C10.2894 4.20722 9.29655 3.79594 8.13337 3.79594C6.97019 3.79594 5.97732 4.20722 5.15475 5.02979C4.33236 5.85218 3.92116 6.84497 3.92116 8.00815V15.5054Z" fill="white"/>
                  </svg>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Channel