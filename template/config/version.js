const fs = require('fs')
const pack = require('../package.json')

// update installation.md
const installation = fs
  .readFileSync('./gitbook/installation.md', 'utf-8')
  .replace(
    /https:\/\/unpkg\.com\/{{ name }}@[\d.]+.[\d]+\/dist\/{{ name }}\.js/,
    'https://unpkg.com/{{ name }}@' + pack.version + '/dist/{{ name }}.js.'
  )
fs.writeFileSync('./gitbook/installation.md', installation)
