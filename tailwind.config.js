/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dot-pattern': "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Ccircle cx=\"10\" cy=\"10\" r=\"1\" fill=\"%23333\"%3E%3C/circle%3E%3C/svg%3E')",
        'bg-layout-bg': '#888888'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3.8rem',
      },
      fontSize: {
        'middle': '12'
      },
      borderRadius: {
        'extra-rounded': '8rem'
      },
      colors: {
        'custom-black': '#161616',
        'custom-gray': '#E1E0E0',
        'custom-light-gray': '#333333',
        'custom-content-gray': '#555454',
        'custom-project-gray': 'rgb(161,161,161)',
        'custom-bg-color': 'rgb(240,239,238)'
      },
      rotate: {
        'custom-title-rotation': '8deg'
      }
    },
  },
  plugins: [],
}