import React from 'react'
import Sidebar from '../components/Sidebar'

const PersonalSettings = () => {
  return (
    <div class="flex flex-row">
        <Sidebar />
        <div class="w-full p-8">
            <h2 class="text-xl font-medium mb-6">Personal Settings</h2>
            <div class="flex flex-col">
            
            <div class="bg-white shadow-md rounded-lg p-4 mb-6">
                <h3 class="text-lg font-medium mb-2">Change Password</h3>
                <form>
                <div class="mb-6">
                    <label class="block text-gray-700 font-medium mb-2" for="current-password">Current Password</label>
                    <input class="w-full border-gray-400 border-2 p-2 rounded" type="password" name="current-password" id="current-password" />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 font-medium mb-2" for="new-password">New Password</label>
                    <input class="w-full border-gray-400 border-2 p-2 rounded" type="password" name="new-password" id="new-password" />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 font-medium mb-2" for="confirm-new-password">Confirm New Password</label>
                    <input class="w-full border-gray-400 border-2 p-2 rounded" type="password" name="confirm-new-password" id="confirm-new-password"/>
                </div>
                <button class="bg-gray-800 text-gray-100 px-4 py-2 rounded hover:bg-gray-700">Change Password</button>
                </form>
            </div>
            
            <div class="bg-white shadow-md rounded-lg p-4 mb-6">
                <h3 class="text-lg font-medium mb-2">Change Email</h3>
                <form>
                <div class="mb-6">
                    <label class="block text-gray-700 font-medium mb-2" for="current-email">Current Email</label>
                    <input class="w-full border-gray-400 border-2 p-2 rounded" type="email" name="current-email" id="current-email" />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 font-medium mb-2" for="new-email">New Email</label>
                    <input class="w-full border-gray-400 border-2 p-2 rounded" type="email" name="new-email" id="new-email" />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 font-medium mb-2" for="confirm-new-email">Confirm New Email</label>
                    <input class="w-full border-gray-400 border-2 p-2 rounded" type="email" name="confirm-new-email" id="confirm-new-email" />
                </div>
                <button class="bg-gray-800 text-gray-100 px-4 py-2 rounded hover:bg-gray-700">Change Email</button>
                </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default PersonalSettings