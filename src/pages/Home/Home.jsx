import React from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className='Home'>
          <Sidebar/>
          <div className='homepage'>
              
          </div>
      </div>
    </>
  )
}

export default Home