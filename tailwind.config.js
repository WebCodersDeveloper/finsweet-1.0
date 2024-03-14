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
        'heroBg' : "url('./image/heroBannner.png')"
      },
      backgroundSize :{
        'standart' : "100%"
      },
    },
  },
  plugins: [],
}