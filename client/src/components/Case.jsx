import React from 'react'

const Case = () => {
  return (
    <div class="lg:flex lg:items-center px-24">
      <div class="lg:w-1/2">
        <img class="h-64 w-full object-cover lg:h-auto lg:w-auto rounded-lg" src="https://res.cloudinary.com/zenbusiness/q_auto,w_1200,h_800/v1/shared-assets/picture/getting-customers.jpg" alt="Placeholder image"/>
      </div>
      <div class="lg:w-1/2 lg:ml-10">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">John Smith</h2>
        <p class="text-gray-600 mb-6">I cannot thank the online course platform enough for transforming my life. It has given me the opportunity to sell my courses to a global audience and build a thriving career. The website's user-friendly interface and comprehensive tools have made it easy for me to create and market my courses. Highly recommended! </p>
        <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">Button</a>
      </div>
    </div>
  )
}

export default Case
