import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import GoogleButton from 'react-google-button'
import axios from 'axios';

const Login = () => {
    const [ user, setUser ] = useState(null);
    const [ profile, setProfile ] = useState([]);
    const [error, setError] = useState(null)

    let navigate = useNavigate()

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });


    useEffect(() => {
        if (user) {
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user?.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setProfile(res.data);
                    console.log(res.data)
                })
                .catch((err) => console.log(err));
        } 
    }, [user])

    const loginUser = (e) => {
        e.preventDefault()

        axios.post("http://127.0.0.1:8000/user/login", {
            "email": e.target.email.value,
            "password": e.target.password.value
        })
        .then(res => {
            localStorage.setItem("jwt", JSON.stringify(res.data.access_token))
            navigate("/")
        })
        .catch(e => {
            setError(e.response.data.detail)
            console.log(error)
        })
    }


    return (
        <section className='w-screen h-[80vh] flex flex-col justify-center'>
            <h3 className='text-center my-12 font-semibold text-2xl font-poppins'>Log In To Your Account</h3>
            <div className='flex items-center flex-col'>
                <form className='flex flex-col xl:w-1/3 lg:w-1/2 md:w-2/4 xs:w-2/3 gap-8' onSubmit={loginUser}>

                    {
                        error &&
                        <div class="flex p-4 mb-4 text-sm text-red-800 rounded-lg mt-6 bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Info</span>
                            <div>
                                <span class="font-medium">{error}</span>
                            </div>
                        </div>
                    }

                    <div className='mx-auto'>
                        <GoogleButton
                            label='Log In With Google'
                            onClick={() => login()}
                        />
                    </div>
                    <div className="relative">
                        <input autoComplete='off' type="text" id="email" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email</label>
                    </div>
                    <div className="relative">
                        <input autoComplete="off" type="password" id="password" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Password</label>
                    </div>
                    <button className="bg-blue-600 text-white font-semibold py-2 w-full rounded">
                        Login
                    </button>
                </form>
                <div>
                    <span className='pr-2'>Don't have an account?</span> 
                    <Link to="/register" className='text-indigo-800 font-bold font-poppins'>Sign up</Link>
                </div>
            </div>
            
        </section>
    )
}

export default Login