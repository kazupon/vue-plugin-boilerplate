module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Plugin name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Plugin description',
      default: 'A Vue.js Plugin'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    githubAccount: {
      type: 'string',
      required: false,
      message: 'GitHub Account',
      default: ''
    },
    e2e: {
      type: 'confirm',
      message: 'Setup e2e tests?'
    },
    gitbook: {
      type: 'confirm',
      message: 'Setup gitbook documentaion?'
    },
    issue: {
      type: 'confirm',
      message: 'Setup issue guide?'
    },
    contribution: {
      type: 'confirm',
      message: 'Setup contribution guide?'
    }
  },
  filters: {
    "examples/**/*": 'e2e',
    "test/e2e/**/*": 'e2e',
    "docs/**/**": 'gitbook',
    "issue_template.md": 'issue'
  },
  helpers: {
    nowYear: function () {
      return new Date().getFullYear()
    },
    authorFullNameFrom: function (author) {
      const startPosition = author.indexOf('<')
      return author.slice(0, startPosition - 1)
    },
    authorEmailFrom: function (author) {
      const startPosition = author.indexOf('<')
      const endPosition = author.indexOf('>')
      return author.slice(startPosition + 1, endPosition)
    },
    classify: function (str) {
      return str.replace(/(?:^|[-_\/])(\w)/g, function (_, c) {
        return c ? c.toUpperCase() : ''
      })
    }
  }
}
