import React, { useContext } from 'react'
import { TContext } from '../context/TranslateContext'
import { Link } from 'react-router-dom'

export const CourseCard = ({title, about, price, image, id}) => {
  return (
    <div class="xs:max-w-[60%] sm:max-w-[250px] bg-white border border-gray-200 rounded-lg shadow">
        <div>
            <img class="rounded-t-lg" src={`http://127.0.0.1:8000/courses/image/${image}`} alt="" />
        </div>
        <div class="p-4">
            <div>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
            </div>
            <p class="font-semibold mb-2">{about}</p>
            <div class="flex items-center mb-6">
                
                <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{price}</p>
            </div>
        
            <div class="flex items-center flex-wrap">
                <button type="button" class="text-blue-700 flex items-center border border-blue-700 transition hover:ease-in-out duration-500 hover:text-white hover:bg-blue-800 focus:ring-0 focus:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none">
                        <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                        Buy now
                </button>
                <Link to={`/courses/${id}`} class="flex items-center font-medium text-sm px-5 py-2.5 text-center mr-2" href="#">
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Link>
            </div>
        </div>
    </div>
    )
}
