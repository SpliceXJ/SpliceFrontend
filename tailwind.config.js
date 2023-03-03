/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: "",
        },
      },
    },
  },
  plugins: [],
};
