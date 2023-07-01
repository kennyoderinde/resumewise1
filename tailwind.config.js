
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color: {
        'navbar-bg' : '#F5F5F5',
        'navbar-bg-2' : '#E74C32',
        'navbar-text-dark-blue' : '#1b263b',
        'main-color' : '#0AC5A8',

      },
      fontFamily: {
        poppins : 'Poppins',
        quicksand : 'Quicksand',

      },

      width: {
        '61': '600px',
        '100' : '120vw',
        '60': '58%',
        '66': '60%',
        '30' : '30rem',
        '18' : '20rem',
      },

       spacing: {
        '60rem': '60rem', // Replace with your desired value
        '59rem': '59rem',
        '43rem': '43rem' ,  

        '23rem': '23rem' 
      },

    },
  },
  plugins: [],
}