import { Fragment, useContext, useEffect, useState } from 'react';
import { Dialog, Transition, Listbox, Popover, Tab , Menu } from '@headlessui/react';
import { Link } from 'react-router-dom';

const MyCourse = () => {


  return (
    <div className="relative w-3/4 float-right">
      <div>
        <div className='flex items-center justify-center font-poppins flex-col w-2/3 mx-auto'>
          <h2 className='text-xl font-semibold mb-2'>JavaScript Course</h2>
          <p className='text-center mb-2'>Course Description, Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className='flex md:flex-row xs:flex-col xs:items-center justify-around w-3/4 mx-auto mt-8'>
            <Link to='/dashboard/courses/1/students' className='flex text-lg font-semibold font-merriw flex-col items-center shadow-lg justify-center h-40 xs:w-full lg:w-48'>
              <span>Students</span>30
            </Link>
            <Link to='/dashboard/courses/1/assignments' className='flex flex-col text-lg font-semibold font-merriw items-center shadow-lg justify-center h-40 xs:w-full lg:w-48'>
              <span>Assignments</span>10
            </Link>
            <Link to='/dashboard/courses/1/videos' className='flex flex-col text-lg font-semibold font-merriw items-center shadow-lg justify-center h-40 xs:w-full lg:w-48'>
              <span>Videos</span>8
            </Link>            
        </div>
        <div className='flex justify-between md:flex-row xs:flex-col xs:items-center gap-5 mt-8 w-2/3 mx-auto font-merriw text-lg'>
          <p>
            Starting Date: 
            <span className='text-green-500 ml-2 font-semibold'>02/05/2023</span>                     
          </p>
          <p>
            Ending Date: 
            <span className='text-red-500 ml-2 font-semibold'>02/05/2023</span>                     
          </p>
        </div>
      </div>
    </div>
  )
}

export default MyCourse