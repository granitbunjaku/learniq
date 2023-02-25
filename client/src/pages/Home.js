import React from 'react'
import HomeAnimation from '../components/HomeAnimation'
import Swiper from '../components/Swiper';
import { Icon } from '@iconify/react';

const Home = () => {

  const stats = [
    { id: 1, name: 'Students', value: '44 thousand' },
    { id: 2, name: 'Instructors', value: '2 thousand' },
    { id: 3, name: 'Classess', value: '10 thousand' },
  ]

  const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      author: {
        name: 'Michael Foster',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      author: {
        name: 'Michael Foster',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      author: {
        name: 'Michael Foster',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    // More posts...
  ]

  const features = [
    {
      name: 'Virtual Learning',
      description:
      "Virtual Classroom Experience: Attend classes from anywhere, at any time, without having to commute",
      icon: 'eos-icons:machine-learning-outlined'
    },
    {
      name: 'Diverse Topics',
      description:
        'Wide Range of Topics: Choose from a variety of subjects and topics, from traditional academic subjects to niche interests.',
      icon: "skill-icons:fediverse-dark"
    },
    {
      name: 'Global Networking',
      description:
        'Connect with Teachers and Students: Network and collaborate with educators and peers from all over the world.',
      icon: "tabler:social"
    },
    {
      name: 'Flexible Scheduling',
      description:
        'Flexibility: Create or attend classes that fit your schedule and learning style.',
      icon: "material-symbols:auto-schedule-outline-sharp"
  },
  ]


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
                  Become A Mentor
                </button>
                <button class="border-blue-600 border-2 hover:bg-blue-800 hover:text-white text-blue-600 font-bold py-3 px-4 rounded">
                  Become A Learner
                </button>
              </div>
            </div>
        </section>
        
      <div className='container pl-28 my-24'>
        <h3 className='font-poppins text-xl font-medium'>Some Courses of different categories:</h3>
      </div>
      <div className='container w-full'>
        <h3 className='font-poppins text-lg px-12 '>Some Courses of different categories:</h3>

          <Swiper />
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-xl font-semibold leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Success Stories</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Some success stories from Students/Mentors of learnIQ
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                  <span>
                    <span className="absolute inset-0" />
                    {post.title}
                  </span>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                    </p>
                </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:text-center sm:w-full">
                  Benefits With LearnIQ
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              With LearnIQ, you'll have access to thousands of high-quality courses and expert instructors, all in one place.
              </p>
              </div>
              <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                  {features.map((feature) => (
                  <div key={feature.name} className="flex items-center relative pl-16">
                      <Icon icon={feature.icon} className="mr-4" height={100} width={100}/>
                      <div>
                        <dt className="text-lg font-semibold leading-7 text-gray-900">
                          {feature.name}
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                        </div>
                  </div>
                  ))}
              </dl>
              </div>
          </div>
      </div>
    </main>
  )
}

export default Home