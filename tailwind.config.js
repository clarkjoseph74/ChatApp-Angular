/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,ts}",
    ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cabin', 'sans-serif'],
      },

       buttons: {
        mainBtn: {
        base: "flex items-center justify-center gap-1 px-2 py-1 rounded-md text-white  cursor-pointer",
        hover: "hover:text-red-700 hover:bg-gray-100 bg-red-500"
        },
    },
  },
  plugins: [],
}}

