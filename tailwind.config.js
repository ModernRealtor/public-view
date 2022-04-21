const colors = require("tailwindcss/colors")
const { getTheme } = require("./custom-theme")

let { primary, secondary } = getTheme()

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1280px) { ... }

      desktop: "1680px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        primary: colors[primary],
        secondary: colors[secondary],
      },
    },
  },
}
