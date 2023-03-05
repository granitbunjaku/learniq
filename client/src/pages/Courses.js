import React from 'react'
import { CourseCard } from '../components/CourseCard'
import CourseFilterMenu from '../components/CourseFilterMenu'

const Courses = () => {
  return (
    <div>
        <CourseFilterMenu />
        <div className='flex gap-8 py-8 flex-wrap sm:px-12 xs:px-8 justify-center'>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
        </div>
    </div>
  )
}

export default Courses