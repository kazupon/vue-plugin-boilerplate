# :nut_and_bolt: vue-plugin-boilerplate

[![CircleCI](https://circleci.com/gh/kazupon/vue-plugin-boilerplate/tree/master.svg?style=svg)](https://circleci.com/gh/kazupon/vue-plugin-boilerplate/tree/master)

Boilerplate for Vue.js plugin


## :rocket: Usage

    $ npm i -g vue-cli
    $ vue init kazupon/vue-plugin-boilerplate vue-hello-plugin

It’s up to you !!

## :hammer: Using tools
- Compiler
    - TypeScript
- Transpile
    - babel (for development)
    - buble (for distribution)
- Linter
    - eslint
- Bundler
    - webpack (for development)
    - rollup (for distribution)
- Test Assertion
    - power-assert
- Test Framework
    - mocha
- Test Runner
    - karma
- Test Coverage
    - istanbul
- Headless Browser
    - chrome headless
- End-to-End Test Fremework
    - nightwatch.js

## :package: Bunlded ModuleName
Defined the came-case into global.

ex:
```
- `name` of package.json
vue-plugin-boilerplate

- bundled
VuePluginBoilerplate

- javascript usage example
Vue.use(VuePluginBoilerplate)
```

# :copyright: License

[MIT](http://opensource.org/licenses/MIT)
