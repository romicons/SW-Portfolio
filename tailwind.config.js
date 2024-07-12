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
        'star-jedi': ['StarJedi', 'sans-serif'],
      },
      screens: {
        tablet: "550px",
      },
    },
  },
};
