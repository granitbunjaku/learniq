/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './src/**/*.{html,js, jsx}'
],
  theme: {
    extend: {},
    screens: {
      'sm': '630px',
      // => @media (min-width: 340px) { ... }
      
      'xs': '330px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      'poppins': ["Poppins", "sans-serif"],
      'merriw': ["Merriweather", "serif"],
      'roboto': ["Roboto", "sans-serif"]
    }
  },
  plugins: [],
}
