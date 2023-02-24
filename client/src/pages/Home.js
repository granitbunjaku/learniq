import React from 'react'
import HomeAnimation from '../components/HomeAnimation'
import ClassCard from '../components/ClassCard';
import Swiper from '../components/Swiper';

const Home = () => {
  return (
    <main>
        <section className="flex lg:flex-row xs:flex-col xs:items-center lg:mt-16 w-full justify-center xs:gap-0 xs:text-center gap-16">
            <HomeAnimation />
            <div className='font-poppins w-1/2 flex flex-col items-center'>
              <h1 className='font-bold mt-12 text-2xl text-center'>LearnIQ - Master New Skills with Ease</h1>
              <h3 className='font-medium'>The Ultimate Learning Platform for Professionals and Lifelong Learners</h3>
              <p className='my-8'>Our platform is designed to make learning easy, convenient, and fun. With intuitive navigation and personalized recommendations, you can quickly find the courses that are right for you and track your progress as you learn</p>
              <div className='flex justify-center gap-4'>
                <button class="bg-[#06a94d] hover:bg-[#059142] text-white font-bold py-3 px-4 rounded">
                  Become A Teacher
                </button>
                <button class="border-blue-600 border-2 hover:bg-blue-800 hover:text-white text-blue-600 font-bold py-3 px-4 rounded">
                  Become A Learner
                </button>
              </div>
            </div>
        </section>

      <section className='py-24'>
        <h3 className='font-poppins text-lg px-12'>Some Courses of different categories:</h3>
        <Swiper />
      </section>
    </main>
  )
}

export default Home