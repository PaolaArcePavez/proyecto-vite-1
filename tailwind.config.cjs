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
          100:"#537D91",
          300: "#C0D2DB",
          900: "#384464", 
        }
      }
    },
  },
  plugins: [],
}