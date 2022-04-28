const colors = require("tailwindcss/colors")
const { getTheme } = require("./custom-theme")

let { primary, secondary } = getTheme()

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'class'. media is the same as false
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
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
