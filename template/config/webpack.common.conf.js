const webpack = require('webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      exclude: /node_modules|vue\/dist/,
      loader: 'babel-loader'
    }, {
      test: /\.tsx?/,
      exclude: /node_modules|vue\/dist/,
      use: [{
        loader: 'babel-loader'
      }, {
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }]
    }]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin()
  ]
}
