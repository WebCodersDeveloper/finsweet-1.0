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
        'heroBg' : "url('./image/heroBannner.png')",
        'tree' : "url('./image/bgTree.svg')",
        'city' : "url('./image/bgCity.svg')",
        'wildlife' : "url('./image/bgWildlife.svg')",
        'donate' : "url('./image/donateBg.svg')",
      },
      backgroundSize :{
        'standart' : "100%"
      },
    },
  },
  plugins: [],
}