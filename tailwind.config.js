/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dot-pattern': "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Ccircle cx=\"10\" cy=\"10\" r=\"1\" fill=\"%23333\"%3E%3C/circle%3E%3C/svg%3E')",
        'layout-bg': '#E1E0E0'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
    colors: {
      'custom-black': '#161616',
      'custom-gray': '#E1E0E0',
      'custom-light-gray': '#333333'
    }
  },
  plugins: [],
}