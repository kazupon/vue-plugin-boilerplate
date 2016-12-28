const base = require('./karma.base.conf')

module.exports = config => {
  const options = Object.assign(base, {
    browsers: ['PhantomJS'],
    reporters: ['coverage', 'coveralls'],
    coverageReporter: {
      reporters: [{
        type: 'lcov', dir: '../coverage', subdir: '.'
      }]
    },
    singleRun: true
  })

  // add babel-plugin-istanbul for code intrumentation
  options.webpack.babel = {
    plugins: [['istanbul', { exclude: ['test/'] }]]
  }

  config.set(options)
}
