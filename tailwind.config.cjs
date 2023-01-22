/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      'teal': '#13636a',
    },
    container: {
      center: true,
      padding: '12rem',
    },
    extend: {}, 
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
