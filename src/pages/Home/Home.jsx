import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import videoData from '../../json/videos.json'
// import inCaseYouMissedImg1 from '../../assets/inCaseYouMissedImg1.png'
// import inCaseYouMissedImg2 from '../../assets/inCaseYouMissedImg2.png'
// import inCaseYouMissedImg3 from '../../assets/inCaseYouMissedImg3.png'
// import ytRedesign from '../../assets/ytRedesign.png'
// import lofi from '../../assets/lofi.png'
// import cat from '../../assets/cat.png'
// import lofigirl from '../../assets/lofigirl.png'
// import wvwUser from '../../assets/wvwUser.png'
// import juxtopposed from '../../assets/juxtopposed.png'

const Home = () => {

  const images = import.meta.glob('../../assets/*', { eager: true });

  const getImage = (filename) => {
    const entry = Object.entries(images).find(([key]) => key.includes(filename));
    return entry ? entry[1].default : '';
  };

  const filterNavElements = [
    {
      id: 1,
      width: "48px",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2044_1888)">
              <path d="M21.6004 6.79993H20.0004M8.00039 6.79993H2.40039" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21.6004 16.7999H14.0004M3.60039 16.7999H2.40039" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.2124 3.62893C13.3688 2.74903 14.6312 2.74903 14.7876 3.62893L15.0156 4.91062C15.0691 5.21171 15.2896 5.45594 15.5837 5.53985L17.3038 6.03065C18.0778 6.2515 18.0778 7.3484 17.3038 7.56925L15.5837 8.06006C15.2896 8.14397 15.0691 8.38819 15.0156 8.68928L14.7876 9.97097C14.6312 10.8509 13.3688 10.8509 13.2124 9.97097L12.9844 8.68928C12.9309 8.38819 12.7104 8.14397 12.4163 8.06006L10.6962 7.56925C9.92216 7.3484 9.92216 6.2515 10.6962 6.03065L12.4163 5.53985C12.7104 5.45594 12.9309 5.21171 12.9844 4.91062L13.2124 3.62893Z" fill="white"/>
              <rect x="6.40039" y="14.4" width="4.8" height="4.8" rx="1.6" stroke="white" stroke-width="1.6"/>
              </g>
              <defs>
              <clipPath id="clip0_2044_1888">
              <rect width="24" height="24" fill="white"/>
              </clipPath>
              </defs>
            </svg>  
    },
    {
      id: 2,
      width: "49px",
      name: "All"
    },
    {
      id: 3,
      width: "119px",
      name: "Subscriptions"
    },
    {
      id: 4,
      width: "68px",
      name: "Posts"
    },
    {
      id: 5,
      width: "71px",
      name: "Music"
    },
    {
      id: 6,
      width: "63px",
      name: "Tech"
    },
    {
      id: 7,
      width: "76px",
      name: "Design"
    },
    {
      id: 8,
      width: "58px",
      name: "Live"
    },
    {
      id: 9,
      width: "86px",
      name: "Gaming"
    },
    {
      id: 10,
      width: "61px",
      name: "Cats"
    },
    {
      id: 11,
      width: "102px",
      name: "Electronics"
    },
    {
      id: 12,
      width: "145px",
      name: "New Creators",
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.01661 1.32872C7.21801 0.237365 8.78199 0.237365 8.98339 1.32872L9.72295 5.33615C9.79596 5.73176 10.0989 6.0451 10.4918 6.13139L14.5528 7.02328C15.6001 7.2533 15.6001 8.7467 14.5528 8.97672L10.4918 9.86861C10.0989 9.9549 9.79596 10.2682 9.72295 10.6638L8.98339 14.6713C8.78199 15.7626 7.21801 15.7626 7.01661 14.6713L6.27705 10.6638C6.20404 10.2682 5.90109 9.9549 5.50817 9.86861L1.44723 8.97672C0.399908 8.7467 0.399908 7.2533 1.44723 7.02328L5.50817 6.13139C5.90109 6.0451 6.20404 5.73176 6.27705 5.33615L7.01661 1.32872Z" fill="url(#paint0_linear_2044_261)"/>
              <defs>
              <linearGradient id="paint0_linear_2044_261" x1="-3" y1="8" x2="19" y2="8" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FF0033"/>
              <stop offset="1" stop-color="#F50057"/>
              </linearGradient>
              </defs>
            </svg>,
      bgColor: "rgb(255, 170, 187, 0.14)"
      
    },
    {
      id: 13,
      width: "52px",
      name: "Art"
    },
    {
      id: 14,
      width: "102px",
      name: "Tech News"
    },
    {
      id: 15,
      width: "94px",
      name: "UI/UX"
    },
    
  ]

  const [hovered, setHovered] = useState(false)

  return (
    <>
      <Navbar/>
      <div className='Home'>
          <Sidebar/>
          <div className='homepage'>
              <div className="filterNav">
                {filterNavElements.map((filterNavElement) => (
                  <div 
                    key={filterNavElement.id} 
                    className="filterIcon" 
                    style={{
                      width: filterNavElement.width,
                      backgroundColor: filterNavElement.bgColor
                    }}
                  >
                    <i>{filterNavElement.icon}</i>
                    <p>{filterNavElement.name}</p>
                  </div>
                ))}
                
              </div>

              <div className="inCaseYouMissed">
                <div className="inCaseYouMissedTxt">
                  <p>In Case You Missed</p>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.0005 8.05376L1.9275 13.127C1.789 13.2653 1.61492 13.3362 1.40525 13.3395C1.19575 13.3427 1.0185 13.2718 0.8735 13.127C0.728667 12.982 0.65625 12.8063 0.65625 12.6C0.65625 12.3937 0.728667 12.218 0.8735 12.073L5.94675 7.00001L0.8735 1.92701C0.735167 1.78851 0.664333 1.61443 0.661 1.40476C0.657833 1.19526 0.728667 1.01801 0.8735 0.873012C1.0185 0.728178 1.19417 0.655762 1.4005 0.655762C1.60683 0.655762 1.7825 0.728178 1.9275 0.873012L7.0005 5.94626L12.0735 0.873012C12.212 0.734678 12.3861 0.663845 12.5958 0.660512C12.8053 0.657345 12.9825 0.728178 13.1275 0.873012C13.2723 1.01801 13.3448 1.19368 13.3448 1.40001C13.3448 1.60635 13.2723 1.78201 13.1275 1.92701L8.05425 7.00001L13.1275 12.073C13.2658 12.2115 13.3367 12.3856 13.34 12.5953C13.3432 12.8048 13.2723 12.982 13.1275 13.127C12.9825 13.2718 12.8068 13.3443 12.6005 13.3443C12.3942 13.3443 12.2185 13.2718 12.0735 13.127L7.0005 8.05376Z" fill="white"/>
                  </svg>
                </div>

                <div className="inCaseYouMissedContentBox">
                  {videoData.slice(0, 3).map((videoData) => (
                    <div key={videoData.id} className="inCaseYouMissedContent">
                        <img src={getImage(videoData.img)} alt="" className='inCaseYouMissedContentVidImg'/>
                        
                        <div className='incaseyoumissedvidinfo'>
                          <img src={getImage(videoData.channelImg)} alt="" className="channelImg"/>
                          <div className='incaseyoumissedvidinfodesc'>
                              <p className='vidName'><b>{videoData.vidName}</b></p>
                              <p>{videoData.channelName}</p>
                              <p>{videoData.views} views . {videoData.time} ago</p>
                          </div>
                          <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 15.0867C1.5875 15.0867 1.23442 14.9398 0.94075 14.646C0.646917 14.3523 0.5 13.9992 0.5 13.5867C0.5 13.1742 0.646917 12.8211 0.94075 12.5272C1.23442 12.2336 1.5875 12.0867 2 12.0867C2.4125 12.0867 2.76558 12.2336 3.05925 12.5272C3.35308 12.8211 3.5 13.1742 3.5 13.5867C3.5 13.9992 3.35308 14.3523 3.05925 14.646C2.76558 14.9398 2.4125 15.0867 2 15.0867ZM2 9.31747C1.5875 9.31747 1.23442 9.17055 0.94075 8.87672C0.646917 8.58305 0.5 8.22997 0.5 7.81747C0.5 7.40497 0.646917 7.05189 0.94075 6.75822C1.23442 6.46439 1.5875 6.31747 2 6.31747C2.4125 6.31747 2.76558 6.46439 3.05925 6.75822C3.35308 7.05189 3.5 7.40497 3.5 7.81747C3.5 8.22997 3.35308 8.58305 3.05925 8.87672C2.76558 9.17055 2.4125 9.31747 2 9.31747ZM2 3.54822C1.5875 3.54822 1.23442 3.40138 0.94075 3.10772C0.646917 2.81388 0.5 2.46072 0.5 2.04822C0.5 1.63572 0.646917 1.28263 0.94075 0.988968C1.23442 0.695135 1.5875 0.548218 2 0.548218C2.4125 0.548218 2.76558 0.695135 3.05925 0.988968C3.35308 1.28263 3.5 1.63572 3.5 2.04822C3.5 2.46072 3.35308 2.81388 3.05925 3.10772C2.76558 3.40138 2.4125 3.54822 2 3.54822Z" fill="white"/>
                          </svg>
                        </div>

                    </div>
                  ))}
                </div>

                <div className="videos">
                  {videoData.slice(3, 6).map((videoData) => (
                    <div key={videoData.id} className="inCaseYouMissedContent">
                      <Link to="/Video" style={{textDecoration: "none"}}>
                        <img src={getImage(videoData.img)} alt="" className='inCaseYouMissedContentVidImg'/>
                      </Link>

                      <div className='incaseyoumissedvidinfo'>
                        <Link to="/Channel" style={{textDecoration: "none"}}>
                          <img src={getImage(videoData.channelImg)} alt="" className="channelImg"/>
                        </Link>
                        <div className='incaseyoumissedvidinfodesc'>
                          <Link to="/Video" style={{textDecoration: "none"}}><p className='vidName'><b>{videoData.vidName}</b></p></Link>
                          
                          <p>{videoData.channelName}</p>
                          <p>{videoData.views} views . {videoData.time} ago</p>
                        </div>
                        <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 15.0867C1.5875 15.0867 1.23442 14.9398 0.94075 14.646C0.646917 14.3523 0.5 13.9992 0.5 13.5867C0.5 13.1742 0.646917 12.8211 0.94075 12.5272C1.23442 12.2336 1.5875 12.0867 2 12.0867C2.4125 12.0867 2.76558 12.2336 3.05925 12.5272C3.35308 12.8211 3.5 13.1742 3.5 13.5867C3.5 13.9992 3.35308 14.3523 3.05925 14.646C2.76558 14.9398 2.4125 15.0867 2 15.0867ZM2 9.31747C1.5875 9.31747 1.23442 9.17055 0.94075 8.87672C0.646917 8.58305 0.5 8.22997 0.5 7.81747C0.5 7.40497 0.646917 7.05189 0.94075 6.75822C1.23442 6.46439 1.5875 6.31747 2 6.31747C2.4125 6.31747 2.76558 6.46439 3.05925 6.75822C3.35308 7.05189 3.5 7.40497 3.5 7.81747C3.5 8.22997 3.35308 8.58305 3.05925 8.87672C2.76558 9.17055 2.4125 9.31747 2 9.31747ZM2 3.54822C1.5875 3.54822 1.23442 3.40138 0.94075 3.10772C0.646917 2.81388 0.5 2.46072 0.5 2.04822C0.5 1.63572 0.646917 1.28263 0.94075 0.988968C1.23442 0.695135 1.5875 0.548218 2 0.548218C2.4125 0.548218 2.76558 0.695135 3.05925 0.988968C3.35308 1.28263 3.5 1.63572 3.5 2.04822C3.5 2.46072 3.35308 2.81388 3.05925 3.10772C2.76558 3.40138 2.4125 3.54822 2 3.54822Z" fill="white"/>
                        </svg>
                      </div>

                    </div>
                  ))}
                </div>

              </div>
          </div>
      </div>
    </>
  )
}

export default Home