import React from 'react'
import { Link, useParams } from 'react-router-dom';

const AssignmentCard = ({assignmentID,title, description, deadline}) => {
    const {id} = useParams()

    return (
        <Link to={`/dashboard/courses/${id}/assignments/${assignmentID}`} className="bg-white rounded-lg shadow-md p-6 w-4/5">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 text-lg mb-4">{description}</p>
            <p className="text-gray-500 text-sm">
                Deadline: <span className='text-red-700'>{deadline}</span>
            </p>
        </Link>
    )
}

export default AssignmentCard