const fs = require('fs')
const pack = require('../package.json')

// update installation.md
const installation = fs
  .readFileSync('./gitbook/installation.md', 'utf-8')
  .replace(
    /<script src="https:\/\/unpkg\.com\/{{ name }}@[\d.]+.[\d]+\/dist\/{{ name }}\.min\.js"><\/script>/,
    '<script src="https://unpkg.com/{{ name }}@' + pack.version + '/dist/{{ name }}.min.js"></script>'
  )
fs.writeFileSync('./gitbook/installation.md', installation)
