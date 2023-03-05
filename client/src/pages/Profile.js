import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition, Popover } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import ProfileVisibility from '../components/ProfileVisibility'

const Profile = () => {
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const [ activePage, setActivePage ] = useState(null)

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    useEffect(() => console.log(activePage) , [activePage])
    const navigation = [
        {
            name: "Profile Visibility",
            allow: "visibility"
        },
        {
            name: "Profile Privacy",
            allow: "privacy"
        },
        {
            name: "Profile Security",
            allow: "security"
        },
    ]


  return (
    <div className='flex w-full h-[72vh]'>
        <nav className='flex flex-col items-center justify-center gap-8 w-1/3 h-1/2 border-gray-300 border-r-2'>
            {navigation.map((link, id) => (
                <Popover key={id} className="flex">
                {({ open }) => (
                <>
                    <div className="relative flex">
                        <Popover.Button
                        onClick={() => setActivePage(link.allow)}
                        className={classNames(
                            open
                            ? 'border-indigo-600 text-indigo-600'
                            : 'border-transparent text-gray-700 hover:text-gray-800',
                            'relative z-10 focus:outline-0 -mb-px flex items-center border-b-2 pt-px py-4 text-[15px] font-medium transition-colors duration-200 ease-out'
                        )}
                        >
                            {link.name}
                        </Popover.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        >
                        <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
                        </Popover.Panel>
                        </Transition>
                    </>
                    )}
                </Popover>
            ))}
            <button 
            onClick={() => setOpen(true)}
            type="button" 
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                Delete Account    
            </button>
        </nav>
        <div className='w-3/4'>
             <ProfileVisibility />
        </div>
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
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
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                            </div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                Delete account
                            </Dialog.Title>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                Are you sure you want to delete your account? All of your data will be permanently
                                removed. This action cannot be undone.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => setOpen(false)}
                        >
                            Deactivate
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
    </div>
  )
}

export default Profile