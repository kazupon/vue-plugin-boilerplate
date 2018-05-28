const webpackConf = require('./webpack.common.conf')
const path = require('path')

module.exports = Object.assign({
  entry: 'mocha-loader!./test/unit/index.js',
  output: {
    path: path.resolve(__dirname, '/test/unit'),
    filename: 'tests.js',
    publicPath: '/'
  },
  devtool: '#eval-source-map'
}, webpackConf)
