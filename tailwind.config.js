const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,liquid}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        display: ["Italiana", "sans-serif"],
        customFont: ["Italiana", "sans-serif"],
      },
    },
  },
  plugins: [],
};
