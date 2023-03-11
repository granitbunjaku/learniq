import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Rte = ({setDescription, description}) => {
   
    const modules = {
        toolbar: [
            [{header: [1, 2, 3, 4, 5, 6, false]}],
            [{font: [] }],
            [{size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
                { list: "ordered"},
                { list: "bullet"},
            ],
            ['link']
            ]
        }

    return (
        <>
            <ReactQuill 
                theme="snow" 
                value={description}
                onChange={setDescription} 
                modules={modules}
                className="h-2/4"
                placeholder='Assignments Description...'
            />
        </>
    )
}


export default Rte;