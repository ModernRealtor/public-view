const colors = require("tailwindcss/colors")


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
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      yellow: colors.yellow,
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      accent: "var(--color-accent)"
    }
  },
  variants: {
    extend: {
      textColor: ['visited'],
    }
  }
}
