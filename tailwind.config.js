/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto','sans-serif'],
      },
      backgroundImage:{
        'heroBg' : "url('./src/image/heroBannner.png')",
        'tree' : "url('./src/image/bgTree.svg ')",
        'city' : "url('./src/image/bgCity.svg')",
        'wildlife' : "url('./src/image/bgWildlife.svg')",
        'donate' : "url('./src/image/donateBg.svg')",
      },
      backgroundSize :{
        'standart' : "100%"
      },
    },
  },
  plugins: [],
}