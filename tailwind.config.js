/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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
        'custom-black': 'rgb(22,22,22)',
        'custom-gray': '#E1E0E0',
        'custom-light-gray': '#333333',
        'custom-content-gray': '#555454',
        'custom-project-gray': 'rgb(161,161,161)',
        'custom-stacks-gray': 'rgb(192,192,192)',
        'custom-bg-color': 'rgb(240,239,238)'
      },
      rotate: {
        'custom-title-rotation': '8deg'
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'xs': '1px 1px 2px rgba(0, 0, 0, 0.3)',
        'md': '3px 3px 6px rgba(0, 0, 0, 0.3)',
        'lg': '5px 5px 10px rgba(0, 0, 0, 0.3)',
        'xl': '6px 6px 15px rgba(0, 0, 0, 0.3)',
      },
      dropShadow: {
        'extra-bold': '0 5px 2px rgba(0, 0, 0, 0.3)',
        'semi-bold': '1px 3px 0.8px rgba(0, 0, 0, 0.3)',
        'icons': '0 1px 2px rgba(0, 0, 0, 0.2)',
      },
      boxShadow: {
        'custom-spread': '0 4px 10px 3px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-xs': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-md': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-lg': {
          textShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-xl': {
          textShadow: '6px 6px 15px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }
      addUtilities(newUtilities, ['resposive', 'hover']);
    }
  ],
}