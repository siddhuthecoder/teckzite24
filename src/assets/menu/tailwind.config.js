/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}"
];
export const theme = {
  extend: {
    fontFamily: {
      bruno: ['Bruno Ace', 'sans-serif'],
    },
    keyframes: {
      slideTop: {
        '0%': { transform: 'translateY(-20px)', opacity: 0 },
        '100%': { transform: 'translateY(0px)', opacity: 1 },
      },
     
    },
    animation: {
      slideTop: 'slideTop 1s ease',
      slideTopDelay1: 'slideTop 0.5s 0.2s ease',
      slideTopDelay2: 'slideTop 0.5s 0.3s ease',
      slideTopDelay3: 'slideTop 0.5s 0.4s ease',
      slideTopDelay4: 'slideTop 0.5s 0.5s ease',
      slideTopDelay5: 'slideTop 0.5s 0.6s ease',
      slideTopDelay6: 'slideTop 0.5s 0.7s ease',
      slideTopDelay7: 'slideTop 0.5s 0.8s ease',
      slideTopDelay8: 'slideTop 0.5s 0.9s ease',
      slideTopDelay9: 'slideTop 0.5s 1s ease',
      slideTopDelay10: 'slideTop 0.5s 1.1s ease',
      slideTopDelay11: 'slideTop 0.5s 1.2s ease',
      slideTopDelay12: 'slideTop 0.5s 1.3s ease',
     
    },
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
    
  },
};
export const plugins = [];
