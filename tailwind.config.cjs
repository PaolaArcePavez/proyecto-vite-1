/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100:"#45658F",
          300: "#9E5514",
          900: "#500D01", 
        }
      }
    },
  },
  plugins: [],
}