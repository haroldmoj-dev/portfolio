/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1DB954",
        primarybright: "#24F057",
        secondary: "#FFFFFF",
        tertiary: "#FFFFC5",
        accent: "#212121",
        background: "#121212",
        text: "#B3B3B3",
      },
      fontFamily: {
        sans: ['"Nunito"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};