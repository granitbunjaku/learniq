import { Fragment, useContext, useEffect, useState } from 'react';
import { Dialog, Transition, Listbox, Popover, Tab , Menu } from '@headlessui/react';
import { Link } from 'react-router-dom';

const MyCourse = () => {

    const subjects = ['Students', 'Assignments', 'Videos']

    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }

  return (
    <div className="relative w-3/4 float-right">
      <header className="">
        <nav aria-label="Top" className="h-32 w-full px-4">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
            {/* Flyout menus */}
            <Popover.Group className="lg:ml-8 h-full lg:block lg:self-stretch w-screen">
              <div className="flex h-full w-full justify-center ">
                <div className='flex gap-28'>
                  {subjects && subjects.map((category) => (
                    <Popover key={category} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 focus:outline-0 -mb-px flex items-center border-b-2 pt-px text-medium font-medium transition-colors duration-200 ease-out'
                                )}
                            >
                              {category}
                            </Popover.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}
                </div>
              <div>
              </div>
              </div>
            </Popover.Group>
            </div>
          </div>
        </nav>
      </header>

      <div>
        <div className='flex items-center justify-center font-poppins flex-col w-2/3 mx-auto'>
          <h2 className='text-xl font-semibold mb-2'>JavaScript Course</h2>
          <p className='text-center mb-2'>Course Description, Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className='flex justify-around w-3/4 mx-auto mt-8'>
            <Link to='/dashboard/courses/1/students' className='flex text-lg font-semibold font-merriw flex-col items-center shadow-lg justify-center h-40 w-48'>
              <span>Students</span>30
            </Link>
            <Link to='/dashboard/courses/1/assignments' className='flex flex-col text-lg font-semibold font-merriw items-center shadow-lg justify-center h-40 w-48'>
              <span>Assignments</span>10
            </Link>
            <Link to='/dashboard/courses/1/videos' className='flex flex-col text-lg font-semibold font-merriw items-center shadow-lg justify-center h-40 w-48'>
              <span>Videos</span>8
            </Link>            
        </div>
        <div className='flex justify-between mt-8 w-2/3 mx-auto font-merriw text-lg'>
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