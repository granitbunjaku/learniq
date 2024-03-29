import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Footer = () => {

  return (
    <>
    <footer className="bg-white mt-24 rounded-lg shadow md:px-6 md:py-12 dark:bg-gray-900">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="/" className="flex items-center mb-4 sm:mb-0">
                <img src={require("../assets/images/logo.png")} className="h-8 mr-3" alt="learnIQ Logo" />
        
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link to="/" className="mr-4 hover:underline md:mr-6 ">About</Link>
                </li>
                <li>
                    <Link to="/" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                </li>
                <li>
                    <Link to="/" className="mr-4 hover:underline md:mr-6 ">Licensing</Link>
                </li>
                <li>
                    <Link to="/" className="hover:underline">Contact</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 3 <Link to="/" className="hover:underline">LearnIQ™</Link>. All Rights Reserved.
        </span>
    </footer>
    </>
  )
}

export default Footer