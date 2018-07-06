const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge({
  module: {
    rules:
      [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
      ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    port: 9000,
    open: true,
  },
  plugins: [
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.min.js'
  },
}, common);