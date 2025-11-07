/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1DB954",
        secondary: "#FFFFFF",
        accent: "#212121",
        background: "#121212",
        text: "#B3B3B3",
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        heading: ["Google Sans Code", "sans-serif"],
        rough: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};