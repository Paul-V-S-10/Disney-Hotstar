import React from 'react'
import './MainUser.css'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const MainUser = () => {
  return (
    <div className='mainUser'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default MainUser