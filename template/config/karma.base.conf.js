const webpackConfig = require('./webpack.common.conf')

module.exports = {
  basePath: '',
  files: [
    '../test/unit/index.js'
  ],
  exclude: [
  ],
  frameworks: ['mocha'],
  preprocessors: {
    '../test/unit/index.js': ['webpack', 'sourcemap']
  },
  webpack: Object.assign({
    devtool: '#inline-source-map'
  }, webpackConfig),
  webpackMiddleware: {
    noInfo: true
  }
}
