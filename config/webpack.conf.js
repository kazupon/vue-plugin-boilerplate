var pack = require('../package.json')
var webpack = require('webpack')
var banner = require('./banner')

module.exports = {
  entry: './src/index',
  output: {
    path: './dist',
    filename: pack.name + '.js',
    library: pack.name,
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets: ['es2015'],
        plugins: [
          ['transform-es2015-modules-commonjs', { loose: true }]
        ]
      }
    }]
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ]
}

