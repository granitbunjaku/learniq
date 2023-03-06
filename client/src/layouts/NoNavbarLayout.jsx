import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardNav from '../components/DashboardNav'
import Footer from '../components/Footer'

const NoNavbarLayout = () => {
  return (
    <>
      <DashboardNav />
      <Outlet />
    </>
  )
}

export default NoNavbarLayout