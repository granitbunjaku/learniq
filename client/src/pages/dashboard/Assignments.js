import React from 'react'
import AssignmentCard from '../../components/AssignmentCard'



const Assignments = () => {
  return (
    <div className='relative w-3/4 float-right'>
        <h3 className='text-center font-semibold text-xl uppercase mt-12 font-poppins'>Assignments of JavaScript Course</h3>
        <div className='flex flex-wrap justify-center gap-4'>
            <AssignmentCard />
            <AssignmentCard />
            <AssignmentCard />
        </div>
    </div>
  )
}

export default Assignments