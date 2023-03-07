import React, { useState } from 'react'
import Datepicker from "react-tailwindcss-datepicker";

const CreateCourse = () => {

    const [ freeCourse, setFreeCourse ] = useState(false)

    const [value, setValue] = useState({
      startDate: new Date(),
      endDate: new Date().setMonth(11)
    });

    const handleValueChange = (newValue) => {
      setValue(newValue);
    }
  
  return (
    <div class="p-6">
        <h1 class="text-center text-3xl font-semibold font-poppins">Create a course</h1>

        <form class="p-6">
            <div class="mb-6">
                <label for="title" class="mb-2 block text-sm font-medium font-poppins text-gray-900">Course Title</label>
                <input type="text" id="title" class="block w-full  font-poppins rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Enter Course Title" required />
            </div>
            <div class="mb-6">
                <label for="image" class="mb-2 block text-sm font-medium font-poppins text-gray-900">Course Image</label>
                <input type="file" id="image" class="block w-full  font-poppins rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500" required />
            </div>
            
            <div class="flex items-center justify-center w-2/4 pl-4 mb-4 border border-gray-200 rounded dark:border-gray-700">
                <input onClick={() => setFreeCourse(false)} checked id="bordered-radio-1" type="radio" value="free" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="bordered-radio-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Free</label>
           
                <input onClick={() => setFreeCourse(true)} id="bordered-radio-2" type="radio" value="pricing" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="bordered-radio-2" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pricing</label>
            </div>

            {freeCourse && 
                <div class="mb-6">
                    <label for="price" class="mb-2 block text-sm font-medium font-poppins text-gray-900">Course Price</label>
                    <input type="number" id="price" class="block w-full  font-poppins rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500" required />
                </div>
            }
            <div class="relative mb-6">
                <label for="price" class="mb-2 block text-sm font-medium font-poppins text-gray-900">Last Enroll date</label>
                <Datepicker
                    inputClassName="font-poppins bg-white dark:bg-white dark:placeholder:text-white border border-gray-300"
                    value={value}
                    onChange={handleValueChange}
                />
            </div>
            <div class="mb-6">
                <label for="message" class="mb-2 block text-sm font-medium font-poppins text-gray-900">Describe the course</label>
                <textarea id="message" rows="4" class="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-poppins font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
                Create new course
            </button>
        </form>
    </div>

  )
}

export default CreateCourse