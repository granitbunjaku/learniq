import React from 'react'
import VideoCard from '../../components/VideoCard'

const Videos = () => {
  return (
    <div className="relative w-3/4 float-right">
        <h3 className='text-center font-semibold text-xl uppercase mt-12 font-poppins'>Videos of JavaScript Course</h3>

        <div className='mt-6 mb-16 gap-16 flex flex-col items-center'>
            <VideoCard />
            <VideoCard />
            <VideoCard />
        </div>
    </div>
  )
}

export default Videos