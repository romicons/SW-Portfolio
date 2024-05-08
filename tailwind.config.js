// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light:  "#fdfefe",
        dark: "#000000",
        primary: "#00FF00",
        secondary: "#0000FF",
        terciary: "",
        accent: "#FF0000"
      },
      fontFamily: {
        sans: ['Bebas Neue', 'sans'],
        serif: ['Roboto', 'sans-serif'],
        'star-jedi': ['StarJedi', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')]
};
