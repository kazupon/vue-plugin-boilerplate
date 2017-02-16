# Installation

### CDN
unpkg
```html
<script src="https://unpkg.com/{{ name }}@{{ version }}/dist/{{ name }}.min.js"></script>
```

{{#unless_eq githubAccount ""}}
## Direct Download

See [dist folder](https://github.com/{{ githubAccount }}/{{ name }}/tree/{{ branch }}/dist). Note the dist files are always the latest stable - it's not update-to-date with the {{ branch }} branch source.
{{/unless_eq}}

## NPM

### stable version

    $ npm install {{ name }}

{{#unless_eq githubAccount ""}}
### development version

    $ git clone https://github.com/{{ githubAccount }}/{{ name }}.git node_modules/{{ name }}
    $ cd node_modules/{{ name }}
    $ npm install
    $ npm run build

When used in CommonJS, you must explicitly install the validator via `Vue.use()`:
{{/unless_eq}}


```javascript
const Vue = require('vue')
const {{ classify name }} = require('{{ name }}')

Vue.use({{ classify name }})
```

You don't need to do this when using the standalone build, as it installs itself automatically.
