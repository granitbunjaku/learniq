import React from 'react'
import { Outlet } from 'react-router-dom'
import CourseNav from '../components/CourseNav'

const CourseLayout = () => {
  return (
    <>
      <CourseNav />
      <Outlet />
    </>
  )
}

export default CourseLayout