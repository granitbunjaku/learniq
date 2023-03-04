import React, { useState } from 'react'
import Datepicker from "react-tailwindcss-datepicker";

const CreateCourse = () => {

    const [value, setValue] = useState({
      startDate: new Date(),
      endDate: new Date().setMonth(11)
    });
    const handleValueChange = (newValue) => {
      console.log("newValue:", newValue);
      setValue(newValue);
    }
  
  return (
    <div class="p-6">
        <h1 class="text-center text-3xl font-semibold font-poppins">Create a course</h1>

        <form class="p-6">
            <div class="mb-6">
                <label for="email" class="mb-2 block text-sm font-medium text-gray-900">Course Name</label>
                <input type="email" id="email" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div class="mb-6">
                <label for="price" class="mb-2 block text-sm font-medium text-gray-900">Course Price</label>
                <input type="number" id="price" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500" required />
                </div>
                <div class="relative mb-6">
                    <label for="price" class="mb-2 block text-sm font-medium text-gray-900">Last Enroll date</label>
                    <Datepicker
                        inputClassName="font-poppins bg-white dark:bg-white dark:placeholder:text-white"
                        value={value}
                        onChange={handleValueChange}
                    />
                </div>

                <div class="mb-6">
                    <label for="message" class="mb-2 block text-sm font-medium text-gray-900">Describe the course</label>
                    <textarea id="message" rows="4" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" placeholder="Leave a comment..."></textarea>
                </div>

                <div class="mb-6 flex items-start">
                    <div class="flex h-5 items-center">
                        <input id="terms" type="checkbox" value="" class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300" required />
                    </div>
                    <label for="terms" class="ml-2 text-sm font-medium text-gray-900">I agree with the <a href="#" class="text-blue-600 hover:underline">terms and conditions</a></label>
                </div>

                <button type="submit" class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">Register new account</button>

            </form>
        </div>

  )
}

export default CreateCourse