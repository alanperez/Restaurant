var webpack = require('webpack')
const path = require('path');

module.exports = {
  // entry point - what wewbpack will load
  entry: {
		firstComp: './assets/firstComp/index.js',
		main: './assets/js/main.js'
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