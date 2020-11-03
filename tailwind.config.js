const variables = require('./src/utilities/variables')

const theme = {
  variables: variables,
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  extend: {},
}

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.{js,jsx}'],
  theme: theme,
  variants: {},
  plugins: [],
}
