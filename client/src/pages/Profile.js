import React from "react";
import Sidebar from "../components/Sidebar";
import { useQuery } from 'react-query'
import axios from "axios"
import { useParams } from "react-router-dom";
import {CourseCard} from '../components/CourseCard'

function Profile() {

    const { id } = useParams()

    const fetchUser = async() => {
        const res = await axios.get(`http://localhost:8000/user/${id}`)
        console.log(res.data)
        return res.data
    }

    const { data, error, isLoading } = useQuery(["user"], fetchUser)

    if(isLoading) return <>isLoading</>

    console.log(data.courses)

    return (
        <div class="flex flex-row h-screen">
            
            <Sidebar />

            <div class="w-full p-8 pb-36 overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-white">
                <div class="flex items-center space-x-4">
                <img class="w-20 h-20 rounded-full" src="https://via.placeholder.com/150" alt="User profile image" />
                <div>
                    <h1 class="text-2xl font-medium">{`${data.user?.name} ${data.user?.surname}`}</h1>
                </div>
                </div>

                <div class="mt-8 flex flex-col justify-between bg-white shadow-md p-8">
                <div class="flex items-center justify-between">
                    <h2 class="text-xl font-medium">About</h2>
                </div>
                    <p class="mt-4">{data.about}</p>
                </div>

                <div class="mt-8">
                    <h2 class="text-lg ml-8 font-medium">Created Courses</h2>
                <div class="bg-white flex flex-wrap gap-8 w-full shadow-md rounded-lg p-8">
                    
                    {data.courses && data.courses.map(course => {
                        return <CourseCard 
                            id={course?.id}
                            title={course?.title}
                            price={course?.price}
                            image={course?.image}
                            about={course?.about}
                        />
                    })}
                </div>
                </div>
            </div>
        </div>
    );
}

export default Profile