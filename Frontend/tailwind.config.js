module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  
    "./index.html",
    "./src//*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    animation: {
      blob: "blob 8s ease-in-out infinite",
    },
    keyframes: {
      blob: {
        '0%, 100%': {
          transform: 'translate(0px, 0px) scale(1)',
        },
        '50%': {
          transform: 'translate(20px, -10px) scale(1.05)',
        },
      },
    },
    extend: {
    },
  },
},

  plugins: [],
}