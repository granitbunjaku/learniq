import React, { useContext } from 'react'
import HomeAnimation from '../components/HomeAnimation'
import Swiper from '../components/Swiper';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { TContext } from '../context/TranslateContext';

const Home = () => {

  const {t} = useContext(TContext)

  const stats = [
    { id: 1, name: t('description.home.students.name'), value: t('description.home.students.value') },
    { id: 2, name: t('description.home.instructors.name'), value: t('description.home.instructors.value') },
    { id: 3, name: t('description.home.classes.name'), value: t('description.home.classes.value') },
  ]

  const posts = [
    {
      id: 1,
      title: t('description.home.post.title'),
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
      title: t('description.home.post.title'),
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
      title: t('description.home.post.title'),
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
      name: t('description.home.all_features.first_feature.name'),
      description: t('description.home.all_features.first_feature.desc'),
      icon: 'eos-icons:machine-learning-outlined'
    },
    {
      name: t('description.home.all_features.second_feature.name'),
      description: t('description.home.all_features.second_feature.desc'),
      icon: "skill-icons:fediverse-dark"
    },
    {
      name: t('description.home.all_features.third_feature.name'),
      description: t('description.home.all_features.third_feature.desc'),
      icon: "tabler:social"
    },
    {
      name: t('description.home.all_features.fourth_feature.name'),
      description: t('description.home.all_features.fourth_feature.desc'),
      icon: "material-symbols:auto-schedule-outline-sharp"
  },
  ]


  return (
    <main>
        <section className="flex lg:flex-row xs:flex-col xs:items-center lg:mt-16 w-full justify-center xs:gap-0 xs:text-center gap-16">
            <HomeAnimation />
            <div className='font-poppins w-1/2 flex flex-col items-center'>
              <h1 className='font-bold mt-12 text-2xl text-center'>{t('description.home.hero.title')}</h1>
              <h3 className='font-medium'>{t('description.home.hero.subtitle')}</h3>
              <p className='my-8'>{t('description.home.hero.desc')}</p>
              <div className='flex justify-center gap-4'>
                <Link to="/teach" class="bg-[#06a94d] hover:bg-[#059142] text-white font-bold py-3 px-4 rounded">
                  {t('description.home.become_mentor')}
                </Link>
                <button class="border-blue-600 border-2 hover:bg-blue-800 hover:text-white text-blue-600 font-bold py-3 px-4 rounded">
                  {t('description.home.become_learner')}
                </button>
              </div>
            </div>
        </section>
        
      <div className='container w-full mt-20'>
        <h3 className='font-poppins text-lg px-12 mb-8'>{t('description.home.course_title')}</h3>

          <Swiper t={t}/>
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('description.home.success_stories.title')}</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {t('description.home.success_stories.desc')}
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
                {t('description.home.features.title')}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {t('description.home.features.desc')}
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