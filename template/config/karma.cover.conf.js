const base = require('./karma.base.conf')

module.exports = config => {
  const options = Object.assign(base, {
    browsers: ['PhantomJS'],
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      reporters: [{
        type: 'lcov', dir: '../coverage'
      }, {
        type: 'text-summary', dir: '../coverage'
      }]
    },
    singleRun: true
  })

  // add babel-plugin-coverage for code intrumentation
  options.webpack.module.loaders[0].query.plugins.push([
    'coverage', { ignore: ['test/'] }
  ])

  config.set(options)
}
