import React from 'react'
import { Link } from 'react-router-dom';

const AssignmentCard = () => {

    const title = "React.js Assignment";
    const description = "Create a web application using React.js that displays a list of items and allows the user to filter and sort the list.";
    const deadline = new Date("2023-03-15");

    return (
        <Link to='/dashboard/courses/1/assignments/1' className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 text-lg mb-4">{description}</p>
            <p className="text-gray-500 text-sm">
                Deadline: <span className='text-red-700'>{deadline.toLocaleDateString()}</span>
            </p>
        </Link>
    )
}

export default AssignmentCard