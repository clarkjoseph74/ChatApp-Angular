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
    },
  },
  plugins: [],
}

