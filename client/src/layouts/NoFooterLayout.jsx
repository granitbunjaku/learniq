import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const NoFooterLayout = () => {
  return (
    <div className='max-h-screen overflow-y-hidden'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default NoFooterLayout