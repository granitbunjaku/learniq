import React, { useContext } from 'react'
import { CourseCard } from '../components/CourseCard'
import CourseFilterMenu from '../components/CourseFilterMenu'
import { CContext } from '../context/CoursesContext'

const Courses = () => {
  const {courses} = useContext(CContext)
  
  return (
    <div>
        <CourseFilterMenu />
        <div className='flex gap-8 py-8 flex-wrap sm:px-12 xs:px-8 justify-center'>
          {courses.map(course => (
            <CourseCard title={course.title} about={course.about} price={course.price} id={course.id} image={course.image}/>
          ))}
        </div>
    </div>
  )
}

export default Courses