import React, {useState} from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {

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
    // {
    //   id: 12,
    //   width: "145px",
    //   name: "New Creators"
    // },
    // {
    //   id: 13,
    //   width: "52px",
    //   name: "Art"
    // },
    // {
    //   id: 14,
    //   width: "102px",
    //   name: "Tech News"
    // },
    // {
    //   id: 15,
    //   width: "94px",
    //   name: "UI/UX"
    // },
    
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
                    }}
                  >
                    <i>{filterNavElement.icon}</i>
                    <p>{filterNavElement.name}</p>
                  </div>
                ))}
                
              </div>
          </div>
      </div>
    </>
  )
}

export default Home