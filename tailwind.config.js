/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "rgb(152, 65, 255)",
      },
      fontFamily: {
        namdhinggo: ["Namdhinggo", "sans-serif"],
        koneMono: ["Kode Mono", "monospace"],
        rog: ["ROG", "sans-serif"],
      },
    },
  },
  plugins: [],
};
