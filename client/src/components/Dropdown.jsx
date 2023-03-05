import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const Dropdown = ({ data }) => {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

  return (
    <Menu as="div" className="relative xs:w-full  md:w-1/5 inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Categories
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute xs:w-full md:w-56 right-0 z-10 mt-2  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/courses/category/web-development"
                  className='block px-4 py-2 text-sm text-gray-700'
                >
                  Web Development
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/courses/web-development"
                  className='block px-4 py-2 text-sm text-gray-700'
                >
                  Arts & Designs
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/courses/web-development"
                  className='block px-4 py-2 text-sm text-gray-700'
                >
                  Business & Finance
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/courses/web-development"
                  className='block px-4 py-2 text-sm text-gray-700'
                >
                  Marketing
                </Link>
              )}
            </Menu.Item>
        </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown