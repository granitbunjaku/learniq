import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const NoNavbarLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default NoNavbarLayout