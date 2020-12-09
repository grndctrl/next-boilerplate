const path = require('path')

const functionsOptions = {
  functions: {
    themeToBase: function (path) {
      let value = _.get(tailwind.theme, _.trim(path, `'"`))

      if (value.includes('px')) {
        return parseFloat(value.slice(0, -2))
      }

      if (value.includes('rem')) {
        return parseFloat(value.slice(0, -3)) * 16
      }

      return 16
    },
    getCalcContent: function (value) {
      if (value.slice(0, 4) === 'calc') {
        return value.slice(4)
      } else {
        return value
      }
    },
    headerHeight: () => {
      return '40px'
    },
  },
}

module.exports = {
  plugins: {
    'postcss-import': {
      path: ['.'],
      resolve: (path) => path.replace('@src', 'src'),
    },
    'postcss-nested': {},
    'postcss-functions': functionsOptions,
    'postcss-simple-vars': {},
    tailwindcss: {},
    autoprefixer: {},
  },
}
