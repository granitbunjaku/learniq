import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div class="bg-gray-800 text-gray-100 w-2/4 h-screen">
        <div class="p-4">
        <div class="flex items-center space-x-4">
            <img class="w-10 h-10 rounded-full" src="https://via.placeholder.com/150" alt="User profile image" />
            <h1 class="text-lg font-medium">Jon Zylfiu</h1>
        </div>
        <ul class="mt-6 space-y-4">
            <li>
            <Link to="/profile" class="block p-2 hover:bg-gray-700 flex items-center gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><circle cx="128" cy="120" r="40" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M63.8,199.4a72,72,0,0,1,128.4,0" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg> <p>Profile</p></Link>
            </li>
            <li>
            <Link to="/settings" class="block p-2 hover:bg-gray-700 flex items-center gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="48" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M197.4,80.7a73.6,73.6,0,0,1,6.3,10.9L229.6,106a102,102,0,0,1,.1,44l-26,14.4a73.6,73.6,0,0,1-6.3,10.9l.5,29.7a104,104,0,0,1-38.1,22.1l-25.5-15.3a88.3,88.3,0,0,1-12.6,0L96.3,227a102.6,102.6,0,0,1-38.2-22l.5-29.6a80.1,80.1,0,0,1-6.3-11L26.4,150a102,102,0,0,1-.1-44l26-14.4a73.6,73.6,0,0,1,6.3-10.9L58.1,51A104,104,0,0,1,96.2,28.9l25.5,15.3a88.3,88.3,0,0,1,12.6,0L159.7,29a102.6,102.6,0,0,1,38.2,22Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg> <p>Personal Settings</p></Link>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Sidebar