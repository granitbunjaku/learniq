import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const DashboardNav = () => {
    const [ link, setLink ] = useState('')
    const {user} = useContext(UserContext)

    const fetchCourses = async() => {
        const res = await axios.get(`http://localhost:8000/my/courses`, {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        })
        return res.data
    }

    const {data, error, isLoading} = useQuery(["mycourses"], fetchCourses)

    if(isLoading) return <>isLoading</>

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }


  return (
    <nav className='w-1/4 relative float-left flex flex-col gap-40 bg-indigo-400 border-r-4 border-black h-screen'>
            
        <div className='flex flex-col items-center mt-24'>
            <h3 className='text-2xl w-2/3 mx-auto font-poppins font-medium'>Created Courses</h3>
            {
                data.map(c => {
                    return (
                    <Link to={`/dashboard/courses/${c.id}`}
                        onClick={() => setLink(c)}
                        className={classNames(
                        link == c
                        ? 'font-semibold border-black'
                        : 'border-transparent text-gray-700 hover:text-gray-800',
                        'w-2/3 mx-auto capitalize z-10 focus:outline-0 -mb-px border-b-2 pt-px text-xl my-2 text-start font-roboto font-medium transition-colors duration-200 ease-out'
                        )}
                    >
                        {c.title}
                    </Link>)
                })
            }
            
        </div>

        <div className='flex flex-col items-center text-xl font-poppins font-medium'>
            <h3 className='text-2xl w-2/3 mx-auto font-poppins font-medium'>Attended Courses</h3>
        </div>
    </nav>
  )
}

export default DashboardNav