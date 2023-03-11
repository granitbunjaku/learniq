import React from 'react'
import { Breadcrumbs } from "@material-tailwind/react";
import { Link, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import PaypalButton from '../components/PaypalButton';
import { useQuery } from 'react-query';
import axios from 'axios';

const Course = () => {
    const {id} = useParams()

    const fetchCourse = async() => {
        const res = await axios.get(`http://localhost:8000/courses/${id}`)
        return res.data
    }

    const {data, error, isLoading} = useQuery(["course"], fetchCourse)

    if(isLoading) return <>isLoading</>

    console.log(data)

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
                        <span>{data.category.name}</span>
                    </Breadcrumbs>
                </span>
                <div className='md:w-[80%] '>
                    <h2 className='text-2xl font-semibold font-roboto'>{data.title}</h2>
                    <div >
                        <span className='mr-2'>from</span> 
                        <Link className='font-poppins text-gray-700 hover:text-gray-900 font-semibold text-xl underline' to={`user/${data.course_owner.id}`}>{data.course_owner.name}</Link>
                    </div>
                </div>
                <div className='flex md:w-4/5 sm:flex-row xs:flex-col xs:items-start xs:my-4 items-center justify-between'>
                    <p className='text-lg font-poppins'>
                        <span className='font-semibold'>{data.price}&euro;/seat </span>
                        for <span className='font-semibold'>100</span> students
                    </p>
                    <PaypalButton />
                </div>
                <div className='font-roboto md: xs:mb-4'>
                    <h2 className='border-b-4 font-roboto text-xl font-semibold border-[#06a94d]'>Description</h2>
                    <p className='text-lg mt-2'>
                        {data.about}
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
                <div className='p-8 content-center'>
                    <img class="w-4/5 h-4/5" src={`http://127.0.0.1:8000/courses/image/${data.image}`} alt={data.title} />
                </div>
                <div className='shadow-xl flex flex-col py-8 items-center min-h-72 w-3/4'>
                    <div className='flex items-center justify-between px-4 w-full'>
                        <div>
                            <h3 className='font-medium text-xl'>{data.course_owner.name}</h3>
                            <span className='font-medium'>{data.course_owner.rating}</span>
                        </div>
                        <div>
                            <Link to={`user/${data.course_owner.id}`} className='font-roboto flex items-center text-lg font-medium underline'>
                                View Profile <Icon icon="material-symbols:arrow-right-alt-rounded"/>
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col items-start w-full p-4'>
                        <h2 className='text-lg font-medium border-black border-b-2'>About</h2>
                        <p>
                            {data.course_owner.about}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course