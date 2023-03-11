import { Icon } from '@iconify/react'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import Rte from './Rte'

const AssignmentModal = ({ setShowModal , changed, setChanged}) => {
    const [ description, setDescription ] = useState('')
    const [ image, setImage ] = useState(null)
    const {user} = useContext(UserContext)
    const [file, setFile] = useState(null);
    const {assignmentID} = useParams()

    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
    };

    const handleSubmit = (e) => {
      e.preventDefault()
      setShowModal(false)
      console.log(e.target)
      let formData = new FormData()
      file && formData.append("image", file);
      formData.append("description", description)
      formData.append("assignment_id", parseInt(assignmentID))
      formData.append("user_id", user.id)

      axios.post("http://127.0.0.1:8000/submissions/", formData, {
        headers: {
          "Authorization": `Bearer ${user.token}`,
          "Content-Type": "multipart/form-data"
        }
      })
      .then((response) => {
        setChanged(!changed)
        console.log(response.data);
        // Handle success here
      }).catch(e => console.log(e.response));
    }

  return (
    <>    
        <form onSubmit={handleSubmit}>

          <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Modal Title
                    </h3>
                      <Icon onClick={() => setShowModal(false)} icon="material-symbols:close" className='cursor-pointer w-12 h-12'/>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 h-80 flex-auto">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Assignment Image</label>
                      <input onChange={handleFileChange} className="block w-full mb-8 h-12 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                      <Rte setDescription={setDescription} description={description}/>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </form>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
  )
}

export default AssignmentModal