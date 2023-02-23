import React from 'react'
import HomeAnimation from '../components/HomeAnimation'

const Home = () => {
  return (
    <div>
        <div className='flex h-80 items-center mt-24'>
            <HomeAnimation />
            <div className='font-poppins w-1/2 flex flex-col items-center'>
              <h1 className='font-bold mt-12 text-2xl text-center'>LearnIQ - Master New Skills with Ease</h1>
              <h3 className='font-medium'>The Ultimate Learning Platform for Professionals and Lifelong Learners</h3>
              <p className='my-8'>Our platform is designed to make learning easy, convenient, and fun. With intuitive navigation and personalized recommendations, you can quickly find the courses that are right for you and track your progress as you learn</p>
              <div className='flex justify-between w-[25rem]'>
                <button class="bg-[#06a94d] hover:bg-[#059142]vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv text-white font-bold py-3 px-4 rounded">
                  Become A Teacher
                </button>
                <button class="border-blue-600 border-2 hover:bg-blue-800 hover:text-white text-blue-600 font-bold py-3 px-4 rounded">
                  Become A Learner
                </button>
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default Home