import React, { useState } from 'react'
import { CourseCard } from '../components/CourseCard'

export const Categories = () => {
  const [showTopic, setShowTopic] = useState(false)  
  const [showSubcategory, setShowSubcategory] = useState(false)  
  const [showLevel, setShowLevel] = useState(false)  
  const [showPrice, setShowPrice] = useState(false)  

  return (
    <>
        <div class="md:px-16 px-8">
            <p class="text-xl font-semibold mb-6 text-center mt-12">Some of the popular topics</p>
            <div class="grid lg:grid-cols-5 lg:grid-rows-2 sm:grid-cols-3 sm:grid-rows-4">
                <button type="button" class="text-blue-700 border border-blue-700 transition hover:ease-in-out duration-500 hover:text-white hover:bg-blue-800 focus:text-white focus:ring-0 focus:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Python</button>
                <button type="button" class="text-blue-700 border border-blue-700 transition hover:ease-in-out duration-500 hover:text-white hover:bg-blue-800 focus:text-white focus:ring-0 focus:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">React JS</button>
                <button type="button" class="text-blue-700 border border-blue-700 transition hover:ease-in-out duration-500 hover:text-white hover:bg-blue-800 focus:text-white focus:ring-0 focus:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">C#</button>
                <button type="button" class="text-blue-700 border border-blue-700 transition hover:ease-in-out duration-500 hover:text-white hover:bg-blue-800 focus:text-white focus:ring-0 focus:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">JavaScript</button>
                <button type="button" class="text-blue-700 border border-blue-700 transition hover:ease-in-out duration-500 hover:text-white hover:bg-blue-800 focus:text-white focus:ring-0 focus:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Machine Learning</button>
                <button type="button" class="text-blue-700 border border-blue-700 transition hover:ease-in-out duration-500 hover:text-white hover:bg-blue-800 focus:text-white focus:ring-0 focus:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Web Development</button>
                <button type="button" class="text-blue-700 border border-blue-700 transition hover:ease-in-out duration-500 hover:text-white hover:bg-blue-800 focus:text-white focus:ring-0 focus:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Data Science</button>
                <button type="button" class="text-blue-700 border border-blue-700 transition hover:ease-in-out duration-500 hover:text-white hover:bg-blue-800 focus:text-white focus:ring-0 focus:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Java</button>
                <button type="button" class="text-blue-700 border border-blue-700 transition hover:ease-in-out duration-500 hover:text-white hover:bg-blue-800 focus:text-white focus:ring-0 focus:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Unity</button>
                <button type="button" class="text-blue-700 border border-blue-700 transition hover:ease-in-out duration-500 hover:text-white hover:bg-blue-800 focus:text-white focus:ring-0 focus:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Unreal Engine C++</button>
            </div>
        </div>
        <div className='flex gap-8 py-8 flex-wrap sm:px-12 xs:px-8 justify-center'>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
        </div>

        <div class="mb-12 grid gap-5 px-14 md:grid-cols-1 md:grid-rows-1 lg:px-40 xl:grid-cols-3 xl:grid-rows-2">
            <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1" onClick={() => setShowTopic(!showTopic)}>
                <button type="button" class={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 hover:bg-blue-800 ${showTopic && "bg-blue-800 text-white"} hover:text-white transition duration-500 ease-out hover:ease-in`} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                <span>Topic</span>
                <svg data-accordion-icon class={`w-6 h-6 ${showTopic && "rotate-180"} shrink-0`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-1" class={!showTopic && "hidden"} aria-labelledby="accordion-collapse-heading-1">
                <div class="p-5 font-light border border-b-0 border-gray-200">
                    <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                            <li class="flex items-center">
                                <input id="apple" type="checkbox" value=""
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                <label for="apple" class="ml-2 text-sm font-medium text-black">
                                Python (56)
                                </label>
                            </li>
                            <li class="flex items-center">
                                <input id="apple" type="checkbox" value=""
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                <label for="apple" class="ml-2 text-sm font-medium text-black">
                                JavaScript (56)
                                </label>
                            </li>
                            <li class="flex items-center">
                                <input id="apple" type="checkbox" value=""
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                <label for="apple" class="ml-2 text-sm font-medium text-black">
                                Java (56)
                                </label>
                            </li>
                            <li class="flex items-center">
                                <input id="apple" type="checkbox" value=""
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                <label for="apple" class="ml-2 text-sm font-medium text-black">
                                Unity (56)
                                </label>
                            </li>
                        </ul>
                </div>
            </div>
            <h2 id="accordion-collapse-heading-2" onClick={() => setShowSubcategory(!showSubcategory)}>
                <button type="button" class={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 hover:bg-blue-800 ${showSubcategory && "bg-blue-800 text-white"} hover:text-white transition duration-500 ease-out hover:ease-in`} data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                <span>Subcategory</span>
                <svg data-accordion-icon class={`w-6 h-6 ${showSubcategory && "rotate-180"} shrink-0`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-2" class={!showSubcategory && "hidden"} aria-labelledby="accordion-collapse-heading-2">
                <div class="p-5 font-light border border-b-0 border-gray-200">
                    <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                            <li class="flex items-center">
                                <input id="apple" type="checkbox" value=""
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                <label for="apple" class="ml-2 text-sm font-medium text-black">
                                Web Development (56)
                                </label>
                            </li>
                            <li class="flex items-center">
                                <input id="apple" type="checkbox" value=""
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                <label for="apple" class="ml-2 text-sm font-medium text-black">
                                Business (56)
                                </label>
                            </li>
                            <li class="flex items-center">
                                <input id="apple" type="checkbox" value=""
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                <label for="apple" class="ml-2 text-sm font-medium text-black">
                                Finance & Accounting (56)
                                </label>
                            </li>
                            <li class="flex items-center">
                                <input id="apple" type="checkbox" value=""
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                <label for="apple" class="ml-2 text-sm font-medium text-black">
                                Arts & Designs (56)
                                </label>
                            </li>
                        </ul>
                </div>
            </div>
            <h2 id="accordion-collapse-heading-3" onClick={() => setShowLevel(!showLevel)}>
                <button type="button" class={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 hover:bg-blue-800 ${showLevel && "bg-blue-800 text-white"} hover:text-white transition duration-500 ease-out hover:ease-in`} data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                <span>Level</span>
                <svg data-accordion-icon class={`w-6 h-6 ${showLevel && "rotate-180"} shrink-0`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-3" class={!showLevel && "hidden"} aria-labelledby="accordion-collapse-heading-3">
                <div class="p-5 font-light border border-t-0 border-gray-200">
                    <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                            <li class="flex items-center">
                                <input id="apple" type="checkbox" value=""
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                <label for="apple" class="ml-2 text-sm font-medium text-black">
                                All Levels (56)
                                </label>
                            </li>
                            <li class="flex items-center">
                                <input id="apple" type="checkbox" value=""
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                <label for="apple" class="ml-2 text-sm font-medium text-black">
                                Beginner (56)
                                </label>
                            </li>
                            <li class="flex items-center">
                                <input id="apple" type="checkbox" value=""
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                <label for="apple" class="ml-2 text-sm font-medium text-black">
                                Intermediate (56)
                                </label>
                            </li>
                            <li class="flex items-center">
                                <input id="apple" type="checkbox" value=""
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                                <label for="apple" class="ml-2 text-sm font-medium text-black">
                                Expert (56)
                                </label>
                            </li>
                        </ul>
                </div>
            </div>
            <h2 id="accordion-collapse-heading-3" onClick={() => setShowPrice(!showPrice)}>
                <button type="button" class={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 hover:bg-blue-800 ${showPrice && "bg-blue-800 text-white"} hover:text-white transition duration-500 ease-out hover:ease-in`} data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                <span>Price</span>
                <svg data-accordion-icon class={`w-6 h-6 ${showPrice && "rotate-180"} shrink-0`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-3" class={!showPrice && "hidden"} aria-labelledby="accordion-collapse-heading-3">
                <div class="p-5 font-light border border-t-0 border-gray-200">
                    <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                        <li class="flex items-center">
                            <input id="apple" type="checkbox" value=""
                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                            <label for="apple" class="ml-2 text-sm font-medium text-black">
                            Free (56)
                            </label>
                        </li>
                        <li class="flex items-center">
                            <input id="apple" type="checkbox" value=""
                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                            <label for="apple" class="ml-2 text-sm font-medium text-black">
                            Paid (56)
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
            <a href="#" class="flex max-w-full flex-col lg:h-64 xs:h-auto items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 lg:flex-row xl:col-span-2">
                <img class="h-auto w-full md:rounded-lg lg:ml-4 lg:w-48" src="https://zemez.io/wp-content/uploads/2022/10/python.png" alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">The Complete Python Bootcamp From Zero to Hero in Python</h5>
                <p class="font-semibold">Jose Portilla</p>
                <div class="flex flex-wrap items-center">
                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>First star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Second star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Third star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Fourth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" class="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Fifth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <p class="ml-2 text-sm font-medium text-gray-500">4.95 out of 5</p>
                </div>
                <p class="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
                <p class="ml-15 mb-3 w-32 text-center font-semibold text-gray-700">€79.99</p>
            </a>
        </div>
    </>
  )
}
