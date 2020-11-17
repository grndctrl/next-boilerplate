const withTM = require('next-transpile-modules')(['drei', 'three'])

module.exports = withTM({
  images: {
    domains: ['localhost:8080'],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'graphql-tag/loader',
        },
      ],
    })

    return config
  },
})
