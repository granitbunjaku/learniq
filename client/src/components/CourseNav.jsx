import { Fragment, useState } from 'react';
import { Transition, Popover } from '@headlessui/react';
import { Link, useParams } from 'react-router-dom';

const CourseNav = () => {
  const [ link, setLink ] = useState('')
  const subjects = ['students', 'assignments', 'videos']

  const {id} = useParams()

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <header className="w-3/4 relative mt-12 float-right">
        <nav aria-label="Top" className="h-32 w-full px-4">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
            {/* Flyout menus */}
            <Popover.Group className="lg:ml-8 h-full lg:block lg:self-stretch w-screen">
              <div className="flex h-full w-full justify-center ">
                <div className='flex gap-28'>
                  {subjects && subjects.map((category) => (
                    <Popover key={category} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Link to={`/dashboard/courses/${id}/${category}`}
                              onClick={() => setLink(category)}
                              className={classNames(
                                link == category
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative capitalize z-10 focus:outline-0 -mb-px flex items-center border-b-2 pt-px text-medium font-medium transition-colors duration-200 ease-out'
                                )}
                            >
                              {category}
                            </Link>
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
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}
                </div>
              <div>
              </div>
              </div>
            </Popover.Group>
            </div>
          </div>
        </nav>
      </header>

  )
}

export default CourseNav