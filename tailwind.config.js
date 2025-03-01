/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        waves: "waves 4s ease-in-out infinite",
        spin: "spin 5s linear infinite",
        spinReverse: "spinReverse 5s linear infinite",
      },
      keyframes: {
        waves: {
          "0%, 100%": {
            clipPath:
              "polygon(0% 45%, 16% 44%, 33% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%)",
          },
          "50%": {
            clipPath:
              "polygon(0% 60%, 15% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%)",
          },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        spinReverse: {
          "0%": { transform: "rotate(360deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      colors: {
        primary: "rgb(152, 65, 255)",
      },
      fontFamily: {
        namdhinggo: ["Namdhinggo", "sans-serif"],
        bruno: ["Bruno Ace", "sans-serif"],
        koneMono: ["Kode Mono", "monospace"],
        rog: ["ROG", "sans-serif"],
        joti: ["Joti One", "serif"],
        orbitron: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
