/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
       screens: {
        'tablet-below': { 'max': '768px' }, // applies to 768px and below
      },
    },
  },
  plugins: [],
}

