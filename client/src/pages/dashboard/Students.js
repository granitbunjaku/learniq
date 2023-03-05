import React from 'react'
import { Link } from 'react-router-dom'

const Students = () => {
  return (
    <div className="relative w-3/4 float-right">
        <h3 className='text-center font-semibold text-xl uppercase mt-12 font-poppins'>Students of JavaScript Course</h3>
        <div class="relative overflow-x-auto mt-12">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-medium text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <th scope="col" class="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                        First Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Last Name
                    </th>
                </thead>
                <tbody>
                    <tr class="bg-white dark:bg-gray-800">
                        <Link to='/dashboard/student/1' scope="row" class="px-6 underline py-6 flex item-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            granitbunjaku@gmail.com
                        </Link>
                        <td class="px-6 py-4">
                            Granit                            
                        </td>
                        <td class="px-6 py-4">
                            Bunjaku
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                        <Link to='/dashboard/student/1' scope="row" class="px-6 underline py-6 flex item-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            jonzylfiu@gmail.com
                        </Link>
                        <td class="px-6 py-4">
                            Jon                            
                        </td>
                        <td class="px-6 py-4">
                            Zylfiu
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                        <Link to='/dashboard/student/1' scope="row" class="px-6 underline py-6 flex item-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            ylberveliu@gmail.com
                        </Link>
                        <td class="px-6 py-4">
                            Ylber                            
                        </td>
                        <td class="px-6 py-4">
                            Veliu
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Students