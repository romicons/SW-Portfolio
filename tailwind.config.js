/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light:  "#fdfefe",
        dark: "#17202a",
        primary: "#00FF00",
        secondary: "#0000FF",
        accent: "#FF0000"
      },
      fontFamily: {
        sans: ['"Bebas Neue"'],
        serif: ['"Roboto"'],
      },
    },
  },
  plugins: [],
}