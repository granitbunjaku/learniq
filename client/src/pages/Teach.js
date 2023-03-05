import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CaseSlider from '../components/CaseSlider'
import { TContext } from '../context/TranslateContext'

export const Teach = () => {

    const {t} = useContext(TContext)

    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-green-600 rounded-full dark:text-white hover:bg-green-700" role="alert">
                    <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">{t('description.teach.hero.new')}</span> <span className="text-sm font-medium">{t('description.teach.hero.new_categories')}</span> 
                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                </a>
                <h1 className="font-bold text-6xl text-black">{t('description.teach.hero.title')}</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 mt-6">{t('description.teach.hero.desc')}</p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    
                    <a href="#" className="outline-0 hover:shadow-lg hover:shadow-blue-800/80 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border border-gray-300 hover:text-white hover:bg-blue-800 transition duration-200 ease-out hover:border-transparent hover:ease-in border-gray-700 ">
                        <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                        {t('description.teach.hero.watch_video')}
                    </a>  
                    <Link to='/become-mentor' className="outline-0 hover:shadow-lg hover:shadow-green-800/80 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border border-gray-300 hover:bg-green-600 hover:text-white transition duration-200 ease-out hover:ease-in hover:border-transparent border-gray-700 hover:bg-blue-600 ">
                        {t('description.teach.hero.become_mentor')}
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
            <h5 class="mb-10 text-2xl font-semibold text-center tracking-tight text-gray-900">Benefits of online teachings</h5>
            <div className='flex justify-center gap-12 flex-wrap'>
                <div class="flex max-w-sm items-center justify-center m-0">
                    <div class="max-w-sm w-150 rounded-md bg-gradient-to-r from-green-400 to-blue-500 p-1 hover:rotate-6 transform-gpu transition ease-in-out group h-92">
                        <div class="max-w-sm p-6 w-150 border bg-white rounded-lg shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-gray-400" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><circle cx="68" cy="84" r="12"></circle><circle cx="108" cy="84" r="12"></circle></svg>
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">{t('description.teach.cards.first.title')}</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-500">{t('description.teach.cards.first.desc')}</p>
                        </div>
                    </div>
                </div>
                <div class="flex max-w-sm items-center justify-center m-0">
                    <div class=" max-w-sm w-150 rounded-md bg-gradient-to-r from-green-400 to-blue-500 p-1 hover:rotate-6 transform-gpu transition ease-in-out group h-92">
                        <div class="max-w-sm p-6 w-150 border bg-white rounded-lg shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-gray-400" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="64 88 16 128 64 168" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="192 88 240 128 192 168" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><line x1="160" y1="40" x2="96" y2="216" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">{t('description.teach.cards.second.title')}</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-500">{t('description.teach.cards.second.desc')}</p>
                        </div>
                    </div>
                </div>
                <div class="flex max-w-sm items-center justify-center m-0">
                    <div class=" max-w-sm w-150 rounded-md bg-gradient-to-r from-green-400 to-blue-500 p-1 hover:rotate-6 transform-gpu transition ease-in-out group h-92">
                        <div class="max-w-sm p-6 w-150 border bg-white rounded-lg shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-gray-400" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="232 56 136 152 96 112 24 184" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="232 120 232 56 168 56" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">{t('description.teach.cards.third.title')}</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-500">{t('description.teach.cards.third.desc')}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 mt-20">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"/>
                <svg viewBox="0 0 1097 845" aria-hidden="true" className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]">
                    <path fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)" fill-opacity=".2" d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z" />
                    <defs>
                    <linearGradient id="10724532-9d81-43d2-bb94-866e98dd6e42" x1="1097.04" x2="-141.165" y1=".22" y2="363.075" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#776FFF" />
                        <stop offset="1" stop-color="#FF4694" />
                    </linearGradient>
                    </defs>
                </svg>
                <svg viewBox="0 0 1097 845" aria-hidden="true" className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0">
                    <path fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)" fill-opacity=".2" d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z" />
                    <defs>
                    <linearGradient id="8ddc7edb-8983-4cd7-bccb-79ad21097d70" x1="1097.04" x2="-141.165" y1=".22" y2="363.075" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#776FFF" />
                        <stop offset="1" stop-color="#FF4694" />
                    </linearGradient>
                    </defs>
                </svg>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{t('description.teach.wwus_section.title')}</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">{t('description.teach.wwus_section.desc')}</p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        <a href="#">{t('description.teach.wwus_section.actions.open_roles')} <span aria-hidden="true">&rarr;</span></a>

                        <a href="#">{t('description.teach.wwus_section.actions.internship')} <span aria-hidden="true">&rarr;</span></a>

                        <a href="#">{t('description.teach.wwus_section.actions.values')} <span aria-hidden="true">&rarr;</span></a>

                        <a href="#">{t('description.teach.wwus_section.actions.leadership')} <span aria-hidden="true">&rarr;</span></a>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col-reverse">
                        <dt className="text-base leading-7 text-gray-300">{t('description.teach.wwus_section.statistics.offices')}</dt>
                        <dd className="text-2xl font-bold leading-9 tracking-tight text-white">12</dd>
                        </div>

                        <div className="flex flex-col-reverse">
                        <dt className="text-base leading-7 text-gray-300">{t('description.teach.wwus_section.statistics.colleagues')}</dt>
                        <dd className="text-2xl font-bold leading-9 tracking-tight text-white">300+</dd>
                        </div>

                        <div className="flex flex-col-reverse">
                        <dt className="text-base leading-7 text-gray-300">{t('description.teach.wwus_section.statistics.hours')}</dt>
                        <dd className="text-2xl font-bold leading-9 tracking-tight text-white">40</dd>
                        </div>

                        <div className="flex flex-col-reverse">
                        <dt className="text-base leading-7 text-gray-300">{t('description.teach.wwus_section.statistics.paid_time')}</dt>
                        <dd className="text-2xl font-bold leading-9 tracking-tight text-white">Unlimited</dd>
                        </div>
                    </dl>
                    </div>
                </div>
                </div>

                <div className='container w-full mt-20 xs:ml-14'>
                    <h3 className='font-poppins text-2xl px-12 text-center'>{t('description.teach.cases.title')}</h3>
                    <hr class="w-48 h-1 mx-auto mt-4 mb-14 bg-gradient-to-r from-green-400 to-blue-500 border-0 rounded dark:bg-gray-700"></hr>
                    <div className='flex justify-item'>
                        <CaseSlider />
                    </div>
                </div>
        </section>
  )
}
