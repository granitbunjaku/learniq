import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import AssignmentModal from '../../components/AssignmentModal'
import LightBox from '../../components/LightBox'

const Assignment = () => {
    const [ showModal, setShowModal ] = useState(false)
    const [ showImage, setShowImage ] = useState(false)

  return (
    <div className='w-3/4 float-right'>
        <div className='flex justify-around items-center'>
            <h3 className='text-center w-1/2 font-roboto text-xl font-medium'>Assignment Title</h3>
            <div>
                <Icon onClick={() => setShowModal(true)} icon="material-symbols:add-circle" className='cursor-pointer' height={50} width={50}/>
            </div>
        </div>

        <div className='mt-12'>
            <div className='w-[90%] shadow-sm mb-12 h-[20vh] font-roboto flex items-center gap-12 mx-auto'>
                <img
                onClick={() => setShowImage(true)}
                className='h-full w-2/4 cursor-pointer object-cover' 
                src="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80" alt="image"/>
                <p className='w-2/4 break-words'>Use a search engine: You can start by using a search engine such as Google or Bing and type in "icons that look like X". This will bring up a list of results that may include websites, blogs, or online resources that offer icons or icon packs.</p>
                <div className='w-2/4 flex flex-col gap-2'>
                    <span>Sent By: <span className='font-semibold'>Granit Bunjaku</span></span>
                    <span>Sent on: <span className='font-semibold'>03/04/2023</span></span>
                </div>
            </div>
        </div>
        {showModal && <AssignmentModal showModal={showModal} setShowModal={setShowModal}/>}
        {showImage && <LightBox setShowImage={setShowImage} image="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"/>}
    </div>
  )
}

export default Assignment