/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'jdark': '#0F1120',
        'jprimary': '#0652E9',
        'jsecondary': '#e1f2fd',
        'jlight': '#fff'
      }
    },
  },
  plugins: [],
}

