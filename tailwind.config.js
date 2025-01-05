/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      // backgroundImage: {
      //   'cup-bg': "url('teckzite24/public/cup_bg.png')",
      //   'whole-bg' : "url('/another-path.jpg')",
      //  },
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
        spin: 'spin 5s linear infinite',
        spinReverse: 'spinReverse 5s linear infinite',
  
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
