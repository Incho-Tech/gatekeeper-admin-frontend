/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primaryFont: 'Poppins',
      secondaryFont: 'Roboto',
    },
    extend: {
      colors: {
        navy: '#2f375a',
        mint: '#a9bfaa',
        white: '#eaecec',
        forest: '#3e503f',
        sky: '#8ea3bb'
      },
    },
  },
  plugins: [],
}

