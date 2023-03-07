import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardNav from '../components/DashboardNav'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const NoNavbarLayout = () => {
  return (
    <>
      <Navbar />
      <DashboardNav />
      <Outlet />
    </>
  )
}

export default NoNavbarLayout