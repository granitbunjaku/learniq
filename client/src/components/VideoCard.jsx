import React, { useState } from 'react'
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'; 

const VideoCard = () => {
  const [ showDesc, setShowDesc ] = useState(false)

  const text = "Description of Video ,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet porttitor lacus luctus accumsan tortor. Nec nam aliquam sem et tortor. Habitasse platea dictumst quisque sagittis. Lacus suspendisse faucibus interdum posuere lorem. Volutpat est velit egestas dui id ornare arcu odio ut. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Erat velit scelerisque in dictum."

  return (
    <div className='w-1/2 h-1/2 gap-4 shadow-md flex items-center flex-col'>
        <Player
            playsInline
            poster="assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />

      <h3 className='text-xl font-poppins font-medium'>Title of Video</h3>
      <p className=' font-poppins'>{!showDesc && text.length > 200 ? text.slice(0, 200)+'...' : text} 
        <span className='text-blue-700 cursor-pointer ml-2' onClick={() => setShowDesc(!showDesc)}>
          {showDesc ? "hide" : "see more"}
        </span>
      </p>
    </div>
  )
}

export default VideoCard