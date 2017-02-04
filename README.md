# vue-plugin-boilerplate

[![CircleCI](https://circleci.com/gh/kazupon/vue-plugin-boilerplate/tree/master.svg?style=svg)](https://circleci.com/gh/kazupon/vue-plugin-boilerplate/tree/master)

Boilerplate for Vue.js plugin


## Usage

    $ npm i -g vue-cli
    $ vue init kazupon/vue-plugin-boilerplate vue-hello-plugin

It’s up to you !!

## Using tools
- Transpiler / Compiler
    - babel (for development)
    - buble (for distribution)
- Type Checker
    - flowtype
- Linter
    - eslint
- Bundler
    - webpack (for development)
    - rollup (for distribution)
- Test Assertion
    - power-assert
- Test Framework
    - jasmine
- Test Runner
    - karma
- Test Coverage
    - istanbul
- Headless Browser
    - phantomjs
- End-to-End Test Fremework
    - nightwatch.js

## Bunlded ModuleName
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

# License

[MIT](http://opensource.org/licenses/MIT)
