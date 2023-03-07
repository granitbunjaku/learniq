import React from 'react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Student = () => {

    const data = [
        { month: 'Jan', completed: 3, incomplete: 2 },
        { month: 'Feb', completed: 4, incomplete: 1 },
        { month: 'Mar', completed: 2, incomplete: 3 },
        { month: 'Apr', completed: 3, incomplete: 2 },
        { month: 'May', completed: 5, incomplete: 0 },
        { month: 'Jun', completed: 1, incomplete: 3 },
      ];

  return (
    <div className="relative w-3/4 float-right">
        <h2 className='text-center font-semibold text-xl uppercase mt-12 font-poppins'>Granit Bunjaku</h2>
        
        <div className='flex justify-center mt-16 flex-col items-center'>
            <p className='text-start w-2/3 pl-6 text-lg font-roboto font-medium'>Statistics Based on Assignments</p>
            <LineChart width={800} height={500} data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="completed" stroke="#39F801" />
                <Line type="monotone" dataKey="incomplete" stroke="#B60B0B" />
            </LineChart>
        </div>
    </div>
  )
}

export default Student