/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    // "../navigation/src/**/*.{js,jsx,ts,tsx}",
    "../totalUsers/src/**/*.{js,jsx,ts,tsx}",
    "../searchUser/src/**/*.{js,jsx,ts,tsx}",
    "../listing/src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {},
  },
  plugins: [],
  important: true, 
} 