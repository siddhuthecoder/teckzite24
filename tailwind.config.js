/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        spinReverse:{
          '0%': { transform: 'rotate(360deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      },
      animation: {
        spin: 'spin 2s linear infinite',
        spinReverse: 'spinReverse 2s linear infinite',
  
      },
      colors: {
        primary: "rgb(152, 65, 255)",
      },
      fontFamily: {
        namdhinggo: ["Namdhinggo", "sans-serif"],
        bruno: ['Bruno Ace', 'sans-serif'],
        koneMono: ["Kode Mono", "monospace"],
        rog: ["ROG", "sans-serif"],
        joti: ["Joti One", "serif"],
      },
    },
  },
  plugins: [],
};
