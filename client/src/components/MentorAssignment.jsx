import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import Rte from './Rte';
import axios from 'axios';
import { UserContext } from '../context/UserContext'
import DatePicker from 'react-date-picker';
import { format } from 'date-fns';

const MentorAssignment = ({open, setOpen, id, setChanged, changed}) => {
    const { user } = useContext(UserContext);
    const [ title, setTitle ] = useState(null);
    const [ description, setDescription ] = useState(null);
    const [ deadline, setDeadline ] = useState(new Date());

    const cancelButtonRef = useRef(null)
    
    const createAssignment = async() => {
        const data = {
            "class_id" : id,
            title,
            description,
            "deadline": format(deadline, 'MM/dd/yyyy')
        };

        const res = await axios.post("http://127.0.0.1:8000/assignments/create", data, {
            headers: { Authorization: `Bearer ${user?.token}` }
          })

        if(res.status = 200) setChanged(!changed)
    }
    
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[99999]" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 h-[60vh] pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        Create An Assignment!
                      </Dialog.Title>
                      <div className='my-2'>
                      <input
                        id="title"
                        name="title"
                        type="text"
                        autoComplete="title"
                        required
                        value={title}
                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Title"
                        onChange={e => setTitle(e.target.value)}
                      />
                      </div>
                      <div className="my-2">
                        <Rte description={description} setDescription={setDescription}/>
                      </div>
                      <div>
                        <DatePicker
                        onChange={setDeadline} 
                        value={deadline}
                        minDate={new Date()}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                        setOpen(false)
                        createAssignment()
                    }}
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default MentorAssignment