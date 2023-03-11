import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import AssignmentCard from '../../components/AssignmentCard'
import MentorAssignment from '../../components/MentorAssignment'
import { Icon } from '@iconify/react'


const Assignments = () => {

  const { id } = useParams()
  const [ open, setOpen ] = useState(false)
  const [ changed, setChanged ] = useState(false)

  return (
    <div className='relative w-3/4 float-right'>
        <h3 className='text-center font-semibold text-xl uppercase mt-12 font-poppins'>Assignments of JavaScript Course</h3>
        <Icon onClick={() => setOpen(true)} icon="material-symbols:add-circle" className='cursor-pointer relative float-right mr-8' height={50} width={50}/>
        <div className='flex flex-wrap justify-center gap-4'>
            <AssignmentCard />
            <AssignmentCard />
            <AssignmentCard />
        </div>
        <MentorAssignment open={open} setOpen={setOpen} changed={changed} setChanged={setChanged} id={id}/>
    </div>
  )
}

export default Assignments