import React from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div className='Homepage'>
        <Sidebar/>
        <div className='homeBody'>
            <Navbar/>
        </div>
    </div>
  )
}

export default Home