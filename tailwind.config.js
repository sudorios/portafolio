/* eslint-disable */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1E1E2F', 
        secondary: '#6CA9F8', 
        accent: '#fde047',
        card: '#27272a', 
        text: '#f4f4f5', 
        'text-secondary': '#a1a1aa', 
      },
    }
  },
  plugins: [],
}