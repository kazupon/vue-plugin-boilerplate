# {{ name }}

{{ description }}

{{#gitbook}}{{#unless_eq githubAccount ""}}
## Documentation
See [here](http://{{ githubAccount }}.github.io/{{ name }}/)
{{/unless_eq}}{{/gitbook}}

## Build Setup

    # install dependencies
    npm install

    # serve with hot reload at localhost:8080
    npm run dev

    # lint source codes
    npm run lint

    # build for production with minification
    npm run build

    # run unit tests
    npm run unit

    # run all tests
    npm test


## License

[MIT](http://opensource.org/licenses/MIT)
