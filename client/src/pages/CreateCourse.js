import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Datepicker from "react-tailwindcss-datepicker";
import { SContext } from '../context/SubcategoriesContext';
import { UserContext } from '../context/UserContext';

const CreateCourse = () => {

    const {subcategories} = useContext(SContext)
    const [ freeCourse, setFreeCourse ] = useState(false)
    const [file, setFile] = useState(null);
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    
    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
    };

    const [value, setValue] = useState({
      startDate: new Date(),
      endDate: new Date().setMonth(11)
    });

    const handleValueChange = (newValue) => {
      setValue(newValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("title", e.target.title.value);
        formData.append("price", freeCourse ? parseInt(e.target.price.value) : 0);
        formData.append("about", e.target.description.value);
        file && formData.append("file", file);
        formData.append("category_id", e.target.subcategories.value);

        axios.post("http://127.0.0.1:8000/courses", formData, {
            headers: {
                "Authorization": `Bearer ${user.token}`,
                "Content-Type": "multipart/form-data"
            }
        })
        .then(res => navigate("/"))
        .catch(e => {
            console.log(e.response)
        })
    }
  
  return (
    <div class="p-6">
        <h1 class="text-center text-3xl font-semibold font-poppins">Create a course</h1>

        <form class="p-6" onSubmit={handleSubmit}>
            <div class="mb-6">
                <label for="title" class="mb-2 block text-sm font-medium font-poppins text-gray-900">Course Title</label>
                <input type="text" id="title" class="block w-full  font-poppins rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Enter Course Title" required />
            </div>
            <div class="mb-6">
                <label for="image" class="mb-2 block text-sm font-medium font-poppins text-gray-900">Course Image</label>
                <input type="file" onChange={handleFileChange} id="image" class="block w-full  font-poppins rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500" required />
            </div>
            
            <div class="flex items-center justify-center w-2/4 pl-4 mb-4 border border-gray-200 rounded dark:border-gray-700">
                <input onClick={() => setFreeCourse(false)} checked id="bordered-radio-1" type="radio" value="free" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="bordered-radio-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Free</label>
           
                <input onClick={() => setFreeCourse(true)} id="bordered-radio-2" type="radio" value="pricing" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="bordered-radio-2" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pricing</label>
            </div>

            <div class="mb-6">
                <label for="subcategories" class="block mb-2 text-sm font-medium text-gray-900">Select a category</label>
                <select id="subcategories" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Choose a category</option>
                    {subcategories && subcategories.map(subcategory => {
                        return <option value={subcategory.id}>{subcategory.name}</option>
                    })}
                </select>
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
                <label for="description" class="mb-2 block text-sm font-medium font-poppins text-gray-900">Describe the course</label>
                <textarea id="description" rows="4" class="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-poppins font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
                Create new course
            </button>
        </form>
    </div>

  )
}

export default CreateCourse