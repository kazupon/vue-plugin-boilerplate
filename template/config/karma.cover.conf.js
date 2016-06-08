var webpack = require('webpack')

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      '../test/index.js'
    ],
    exclude: [
    ],
    preprocessors: {
      '../test/index.js': ['webpack', 'sourcemap']
    },
    webpack: {
      module: {
        preLoaders: [{
          test: /\.js$/,
          exclude: /node_modules|vue\/dist/,
          loader: 'babel!eslint'
        }],
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules|vue\/dist/,
          loader: 'babel',
          query: {
            presets: ['es2015'],
            plugins: [
              ['babel-plugin-espower'],
              ['coverage', { ignore: ['test/'] }]
            ]
          }
        }],
        postLoaders: [{
          test: /\.json$/,
          loader: 'json'
        }]
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"development"'
          }
        })
      ],
      devtool: '#inline-source-map'
    },

    webpackMiddleware: {
      noInfo: true
    },

    reporters: [
      'progress', 'coverage'
    ],
    coverageReporter: {
      reporters: [{
        type: 'lcov', dir: '../coverage'
      }, {
        type: 'text-summary', dir: '../coverage'
      }]
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true
  })
}
