const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
}