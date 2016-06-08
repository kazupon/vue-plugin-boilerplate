# {{ name }}

{{ description }}

{{#gitbook}}{{#unless_eq githubAccount ""}}
## Documentation
See [here](http://{{ githubAccount }}.github.io/{{ name }}/){{/unless_eq}}{{/gitbook}}

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

## Changelog
Details changes for each release are documented in the {{#unless_eq githubAccount ""}}[CHANGELOG.md](https://github.com/{{ githubAccount }}/{{ name }}/blob/master/CHANGELOG.md){{/unless_eq}}{{#if_eq githubAccount ""}}`CHANGELOG.md`{{/if_eq}}.

{{#issue}}
## Issues
Please make sure to read the [Issue Reporting Checklist](https://github.com/vuejs/vue/blob/dev/CONTRIBUTING.md#issue-reporting-guidelines) before opening an issue. Issues not conforming to the guidelines may be closed immediately.
{{/issue}}

## Contribution
{{#contribution}}Please make sure to read the [Contributing Guide](https://github.com/vuejs/vue/blob/dev/CONTRIBUTING.md) before making a pull request.
{{/contribution}}
- Fork it !
- Create your top branch from `dev`: `git branch my-new-topic origin/dev`
- Commit your changes: `git commit -am 'Add some topic'`
- Push to the branch: `git push origin my-new-topic`
{{#unless_eq githubAccount ""}}
- Submit a pull request to `dev` branch of `{{ githubAccount }}/{{ name }}` repository !
{{/unless_eq}}

## License

[MIT](http://opensource.org/licenses/MIT)
