import React from "react";
import Sidebar from "../components/Sidebar";

function Profile() {
    return (
        <div class="flex flex-wrap flex-row h-screen">
            
            <Sidebar />

            <div class="w-1/2 lg:w-3/4 md:2/4 p-8">
                <div class="flex items-center space-x-4">
                <img class="w-20 h-20 rounded-full" src="https://via.placeholder.com/150" alt="User profile image" />
                <div>
                    <h1 class="text-2xl font-medium">Jon Zylfiu</h1>
                    <p class="text-gray-500">Software Developer</p>
                </div>
                </div>

                <div class="mt-8 flex flex-col justify-between bg-white shadow-md p-8">
                <div class="flex items-center justify-between">
                    <h2 class="text-xl font-medium">Bio</h2>
                    <button class="bg-gray-800 text-gray-100 px-4 py-2 rounded">Edit</button>
                </div>
                <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit velit eu enim bibendum hendrerit. Duis porttitor volutpat posuere. Aenean mollis quis massa ut varius. Aliquam erat volutpat. Nulla id tristique sapien.</p>
                </div>

                <div class="mt-8 flex items-center justify-end">
                <div class="bg-white shadow-md rounded-lg p-8">
                    <h2 class="text-lg font-medium">Other Stuff</h2>
                    <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit velit eu enim bibendum hendrerit. Duis porttitor volutpat posuere. Aenean mollis quis massa ut varius. Aliquam erat volutpat. Nulla id tristique sapien.</p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Profile