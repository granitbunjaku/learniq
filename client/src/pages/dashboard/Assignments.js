import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import AssignmentCard from '../../components/AssignmentCard'



const Assignments = () => {

  const {id} = useParams()

  const fetchCourseAssignments = async() => {
      const res = await axios.get(`http://localhost:8000/course/${id}/assignments`)
      return res.data
  }

  const {data, error, isLoading} = useQuery(["course_assignments"], fetchCourseAssignments)

  if(isLoading) return <>isLoading</>

  return (
    <div className='relative w-3/4 float-right'>
        <h3 className='text-center font-semibold text-xl uppercase mt-12 font-poppins'>Assignments of JavaScript Course</h3>
        <div className='flex flex-wrap justify-center gap-4'>
            {data && data.map(assignment => {
                return <AssignmentCard assignmentID={assignment.id} title={assignment.name} description={assignment.description} deadline={assignment.deadline.split('T')[0]}/>
            })}
        </div>
    </div>
  )
}

export default Assignments