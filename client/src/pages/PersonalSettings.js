import React, { useContext, useState } from 'react'
import Sidebar from '../components/Sidebar'
import axios from 'axios'
import { UserContext } from '../context/UserContext';
import { useQuery } from 'react-query';

const PersonalSettings = () => {
    const { user, setUser } = useContext(UserContext)
    const [ name, setName ] = useState("")
    const [ surname, setSurname ] = useState("")
    const [ about, setAbout ] = useState("")
    const [ phone, setPhone ] = useState("")


    console.log(user?.token)
    const fetchData = async() => {
        const res = await axios.get("http://localhost:8000/user/me", {
            headers: { "Authorization": `Bearer ${user?.token}` }
        })
        
        const data = res.data;

        setName(data.name)
        setSurname(data.surname)
        setAbout(data.about)
        setPhone(data.phone_number)

        return data
    }

    const { data, error, isLoading } = useQuery('data', fetchData, {
        enabled: !!user?.token
    })

    if(isLoading) return <>Loading...</>
    if(error) return <>{error.message}</>

    
    const handleUpdate = async e => {
        e.preventDefault();
        
        const formData = new FormData(e.target); 
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await axios.put(`http://localhost:8000/user/${user?.id}`, data, {
                headers: { "Authorization": `Bearer ${user.token}` }
            })

            console.log(res)
        } catch (error) {
            console.log("ERROR: "+error.message)
        }
        
        
    }

    
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
                <form onSubmit={handleUpdate}>
                    <div class="mb-6">
                        <label class="block text-gray-700 font-medium mb-2" for="image">Name</label>
                        <input 
                            class="w-full border-gray-400 border-2 p-2 rounded" 
                            type="file" 
                            name="image" 
                            id="image" 
                        />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 font-medium mb-2" for="name">Name</label>
                        <input 
                        class="w-full border-gray-400 border-2 p-2 rounded" 
                        type="text" 
                        name="name" 
                        id="name" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />

                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 font-medium mb-2" for="surname">Surname</label>
                        <input 
                        class="w-full border-gray-400 border-2 p-2 rounded" 
                        type="text" 
                        name="surname" 
                        id="surname" 
                        value={surname}
                        onChange={e => setSurname(e.target.value)}
                        />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 font-medium mb-2" for="phone_number">Phone Number</label>
                        <input 
                        class="w-full border-gray-400 border-2 p-2 rounded" 
                        type="text" 
                        name="phone_number" 
                        id="phone_number" 
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 font-medium mb-2" for="about">About</label>
                        <textarea 
                        class="w-full border-gray-400 border-2 p-2 rounded" 
                        type="text" 
                        name="about" 
                        id="about" 
                        value={about}
                        onChange={e => setAbout(e.target.value)}
                        />
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