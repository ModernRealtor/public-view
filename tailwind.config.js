const colors = require("tailwindcss/colors")
const plugin = require("tailwindcss/plugin")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.emerald,
      orange: {
        light: "##fdd086",
        DEFAULT: "#FBB33B",
        dark: "#e59105",
      },
    },
    extend: {},
  },
  variants: {
    extend: {
      position: ["important"],
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    plugin(function ({ addVariant }) {
      addVariant("important", ({ container }) => {
        container.walkRules(rule => {
          rule.selector = `.\\!${rule.selector.slice(1)}`
          rule.walkDecls(decl => {
            decl.important = true
          })
        })
      })
    }),
  ],
}
