import React from 'react'
import VideoCard from '../../components/VideoCard'

const Videos = () => {
  return (
    <div className="relative w-3/4 float-right">
        <h3 className='text-center font-semibold text-xl uppercase mt-12 font-poppins'>Videos of JavaScript Course</h3>

        <div className='my-6 flex flex-col items-center'>
            <VideoCard />
        </div>
    </div>
  )
}

export default Videos