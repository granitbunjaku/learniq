import { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, Disclosure, Popover, Transition, Menu } from '@headlessui/react'
import { Icon } from '@iconify/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { TContext } from '../context/TranslateContext'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [ user, setUser ] = useState(12)
    const {t, i18n, lngs} = useContext(TContext)

    const categories = [
      { name: t('description.navbar.web_development.title'), description: t('description.navbar.web_development.desc'), href: 'category/web_development', icon: "uil:programming-language" },
      { name: t('description.navbar.business.title'), description: t('description.navbar.business.desc'), href: 'category/business', icon: "mdi:business-outline" },
      { name: t('description.navbar.finance.title'), description: t('description.navbar.finance.desc'), href: 'category/finance_accounting', icon: "mdi:finance" },
      { name: t('description.navbar.design.title'), description: t('description.navbar.design.desc'), href: 'category/arts_design', icon: "map:art-gallery" },
    ]

    return (
        <header className="bg-white border-b-[1px] border-gray-300">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src={require('../assets/images/logo.png')} alt="logo" />
            </Link>
            </div>
            <div className="flex lg:hidden">
            <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
            >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            </div>
            <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                  {t('description.navbar.categories')}
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                </Popover.Button>

                <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
                >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {categories.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <Icon icon={item.icon} height={30} width={30}/>
                      </div>
                      <div className="flex-auto">
                        <Link to={item.href} className="block font-semibold text-black">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link to="/teach" className="text-sm font-semibold leading-6 text-gray-900">
            {t('description.navbar.become_mentor')}
          </Link>
          <Link to="/pricing" className="text-sm font-semibold leading-6 text-gray-900">
            {t('description.navbar.pricing')}
          </Link>
        </Popover.Group>
        {
          user == null 
          ?
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          :
          <div className="xs:hidden items-center justify-end lg:flex lg:flex-1 lg:w-0">
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex  rounded-full h-8 w-8 justify-center items-center font-bold text-white bg-gray-800 text-sm focus:outline-none ">
                  JZ
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={`/profile`}
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                        {t('description.navbar.profile')}
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to='/dashboard'
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                        {t('description.navbar.dashboard')}
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <span
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                        {t('description.navbar.signout')}
                      </span>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        }

        <div className="flex gap-2 ml-6">
          {Object.keys(lngs).map((lng) => (
            <button key={lng} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              <img src={lngs[lng].flag} className="w-6 h-4"/>
            </button>
          ))}
        </div>
        
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel
          focus="true"
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div className="flex sm:hidden items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={require('../assets/images/logo.png')}
                alt="logo"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                          {t('description.navbar.categories')}
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {categories.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {t('description.navbar.become_mentor')}
                </Link>
                <Link
                  to="/prices"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {t('description.navbar.pricing')}
                </Link>
              </div>
              {user == null 
              ?
              <div className="py-6">
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
              :
              <div>
                <div className="py-2 mt-2">
                  <Link to={`/profile`} className="text-base font-medium text-gray-900 hover:text-gray-700">
                    {t('description.navbar.profile')}
                  </Link>
                </div>
                <div className="py-2">
                  <Link to='/dashboard' className="text-base font-medium text-gray-900 hover:text-gray-700">
                    {t('description.navbar.dashboard')}
                  </Link>
                </div>
                <div className="py-2">
                  <span
                    className="text-base cursor-pointer font-medium text-gray-900 hover:text-gray-700"
                    >
                      {t('description.navbar.signout')}
                  </span>
                </div>
              </div>
              }
              
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
    )
}

export default Navbar