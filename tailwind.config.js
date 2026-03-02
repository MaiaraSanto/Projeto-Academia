/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {

    fontFamily: {
      primary: ['Inter', 'sans-serif'],
      secondary: ['Open Sans', 'sans-serif'],
    },

    container: {
      padding: {
        DEFAULT: '0px',
      },
    },

    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },

    extend: {

      colors: {
        primary: {
          100: '#a5ffce',
          200: '#4ae290',
          300: '#25c870',
        },

        neutral: {
          100: '#ffffff',
          200: '#dedee3',
          300: '#9797a1',
          400: '#595962',
          500: '#131316',
        },

        page: '#fcfcff',
      },

      backgroundImage: {
        banner: "url('./assets/img/banner/bg.png')",
        faq: "url('./assets/img/faq/bg.svg')",
      },

    },

  },

  plugins: [],
}