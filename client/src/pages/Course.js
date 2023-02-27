import React from 'react'
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Course = () => {
  return (
    <div className='md:h-[88.5vh]  pb-[10rem] 
    flex xs:flex-col xs:flex-col-row xs:items-center md:flex-row'>
        {/*Left Side of page */}
        <div className='md:w-1/2  xs:px-12 flex flex-col justify-between  h-full'>
            <span>
                <Breadcrumbs>
                    <span className="opacity-60">
                        Courses
                    </span>
                    <span className="opacity-60">
                        Category
                    </span>
                    <span>Technology</span>
                </Breadcrumbs>
            </span>
            <div className='md:w-[80%] '>
                <h2 className='text-2xl font-semibold font-roboto'>Noteworthy technology acquisitions 2021</h2>
                <div >
                    <span className='mr-2'>from</span> 
                    <Link className='font-poppins text-gray-700 hover:text-gray-900 font-semibold text-xl underline' to='user/id'>Granit Bunjaku</Link>
                </div>
            </div>
            <div className='flex md:w-4/5 sm:flex-row xs:flex-col xs:items-start xs:my-4 items-center justify-between'>
                <p className='text-lg font-poppins'>
                    <span className='font-semibold'>25&euro;/seat </span>
                    for <span className='font-semibold'>100</span> students
                </p>
                <button class="bg-[#06a94d] hover:bg-[#059142] text-white font-roboto font-bold py-3 w-52 rounded">
                  Enroll Now!
                </button>
            </div>
            <div className='font-roboto md: xs:mb-4'>
                <h2 className='border-b-4 font-roboto text-xl font-semibold border-[#06a94d]'>Description</h2>
                <p className='text-lg mt-2'>
                    Use our Tailwind CSS Breadcrumbs component to simply create beautiful Breadcrumbs for your pages with Material Tailwind.
                    Breadcrumbs are website links that allow users to track where they are on a website and how far they are from the homepage.
                </p>
            </div>
            <div className='font-roboto'>
                <h2 className='font-roboto flex items-center text-xl font-semibold'>
                    <Icon height={30} width={30} className='mr-2' icon="iconoir:question-mark-circle" />
                    Details
                </h2>
                <div className="border-t border-gray-200">
                    <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Language</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">English</dd>
                    </div>
                    <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Course Duration</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            3 Months
                        </dd>
                    </div>
                </div>
            </div>   
        </div>
        {/*Right Side of page */}
        <div className="md:w-1/2  flex flex-col items-center">
            <div className='p-8'>
                <img class="w-full h-full" src="https://www.freecodecamp.org/news/content/images/2021/06/javascriptfull.png" alt="" />
            </div>
            <div className='border-2 flex flex-col py-8 items-center border-black min-h-72 w-3/4'>
                <div className='flex items-center justify-between px-4 w-full'>
                    <div>
                        <h3 className='font-medium text-xl'>Granit Bunjaku</h3>
                        <span className='font-medium'>Front-End Developer</span>
                    </div>
                    <div>
                        <Link to='/' className='font-roboto text-lg font-medium underline'>
                            View Profile {"->"}
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col items-start w-full p-4'>
                    <h2 className='text-lg font-medium border-black border-b-2'>About</h2>
                    <p>
                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                    qui ipsum aliquip consequat sint.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Course