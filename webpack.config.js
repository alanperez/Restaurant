var webpack = require('webpack')

module.exports = {
  // entry point - what wewbpack will load
  entry: {
    firstComp: './assets/firstComp/index.js'
  },

  output: { filename: '[name].js',
  path: path.resolver(__dirname,  'public/js/components')  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'prettier-loader']
      },
      { test: /\.svelte$/, exclude: /node_modules/, use: 'svelte-loader' },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  }
}