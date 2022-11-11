/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%',
        '3': '2 2 0%',
        '4': '2 2 0%',
        '5': '2 2 0%'
      }
    },
  },
  plugins: [],
}
