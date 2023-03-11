import { Icon } from '@iconify/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import AssignmentModal from '../../components/AssignmentModal'
import LightBox from '../../components/LightBox'

const Assignment = () => {
    const [ showModal, setShowModal ] = useState(false)
    const [ showImage, setShowImage ] = useState(false)
    const [changed, setChanged] = useState(false)
    const {assignmentID} = useParams()

    const fetchCourseAssignments = async() => {
        const res = await axios.get(`http://localhost:8000/submissions/assignment/${assignmentID}`)
        return res.data
    }

    const {data, error, isLoading} = useQuery(["course_assignments", changed], fetchCourseAssignments)
    if(isLoading) return <>isLoading</>

  return (
    <div className='w-3/4 float-right'>
        <div className='flex justify-around items-center'>
            <h3 className='text-center w-1/2 font-roboto text-xl font-medium'>Assignment Title</h3>
            <div>
                <Icon onClick={() => setShowModal(true)} icon="material-symbols:add-circle" className='cursor-pointer' height={50} width={50}/>
            </div>
        </div>

        <div className='mt-12'>
            {data && data.map(item => {
                return(
                    <div className='w-[90%] shadow-sm mb-12 h-[20vh] font-roboto flex items-center gap-12 mx-auto'>
                        <img
                        onClick={() => setShowImage(true)}
                        className='h-full w-2/4 cursor-pointer object-cover' 
                        src={`http://localhost:8000/submissions/image/${item.submission.image}`} alt="image"/>
                        <p className='w-2/4 break-words'>{item.submission.description}</p>
                        <div className='w-2/4 flex flex-col gap-2'>
                            <span>Sent By: <span className='font-semibold'>{item.user_name}</span></span>
                            <span>Sent on: <span className='font-semibold'>03/04/2023</span></span>
                        </div>
                    </div>
                )
            })}
        </div>
        {showModal && <AssignmentModal changed={changed} setChanged={setChanged} showModal={showModal} setShowModal={setShowModal}/>}
        {showImage && <LightBox setShowImage={setShowImage} image="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"/>}
    </div>
  )
}

export default Assignment