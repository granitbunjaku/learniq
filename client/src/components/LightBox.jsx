import { Icon } from '@iconify/react'
import React from 'react'

const LightBox = ({ image, setShowImage }) => {

    return (
    <div className='absolute bottom-0 left-0 top-0 right-0 flex items-center justify-center'>
        <img src={image} className="relative w-2/3 h-2/3 z-[100]" alt="image"/>
        <div className='absolute bg-black opacity-70 z-[90]  bottom-0 left-0 top-0 right-0'></div>
        <Icon onClick={() => setShowImage(false)} icon="material-symbols:close" className='cursor-pointer w-12 h-12 z-[91] absolute top-[130px] right-[195px]'/>
    </div>
  )
}

export default LightBox