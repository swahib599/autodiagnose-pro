/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'petrol-blue': '#2c3e50',
        'petrol-green': '#16a085',
        'shell-yellow': '#f1c40f',
        'shell-red': '#e74c3c',
        'oil-black': '#2c3e50',
      },
      fontFamily: {
        'exo': ['Exo 2', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}