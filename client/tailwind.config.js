/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './src/**/*.{html,js,jsx}',
  "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
],
  theme: {
    extend: {},
    screens: {
      'xs': '330px',
      // => @media (min-width: 340px) { ... }
      
      'sm': '630px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1230px',
      // => @media (min-width: 1280px) { ... }

      '1xl': '1536px',
      // => @media (min-width: 1280px) { ... }
      
      // => @media (min-width: 1536px) { ... }
      '2xl': '1820px',

    },
    fontFamily: {
      'poppins': ["Poppins", "sans-serif"],
      'merriw': ["Merriweather", "serif"],
      'roboto': ["Roboto", "sans-serif"]
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
