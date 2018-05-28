# Installation

## Direct Download / CDN

https://unpkg.com/{{ name }}/dist/{{ name }}

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/{{ name }}@{{ version }}/dist/{{ name }}.js
 
Include {{ name }} after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/{{ name }}/dist/{{ name }}.js"></script>
```

## NPM

```sh
$ npm install {{ name }}
```

## Yarn

```sh
$ yarn add {{ name }}
```

When used with a module system, you must explicitly install the `{{ name }}` via `Vue.use()`:

```javascript
import Vue from 'vue'
import {{ classify name }} from '{{ name }}'

Vue.use({{ classify name }})
```

You don't need to do this when using global script tags.

{{#unless_eq githubAccount ""}}
## Dev Build

You will have to clone directly from GitHub and build `{{ name }}` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com/{{ githubAccount }}/{{ name }}.git node_modules/{{ name }}
$ cd node_modules/{{ name }}
$ npm install
$ npm run build
```

{{/unless_eq}}
