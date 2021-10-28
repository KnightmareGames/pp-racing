const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#EFE0C6',
      'secondary': '#378397',
      'tertiary': '#BF5136'
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#2E2D2D',
      'secondary': '#F5D21F',
    }),
    extend: {
      fontFamily: {
        'sans': ["Roboto", ...defaultTheme.fontFamily.sans],
        'main': ['"Racing Sans One"'],
        'secondary': ['"Open Sans"'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
