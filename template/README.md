# {{ name }}

{{ description }}

{{#gitbook}}{{#unless_eq githubAccount ""}}
## :book: Documentation
See [here](http://{{ githubAccount }}.github.io/{{ name }}/){{/unless_eq}}{{/gitbook}}

## :scroll: Changelog
Details changes for each release are documented in the {{#unless_eq githubAccount ""}}[CHANGELOG.md](https://github.com/{{ githubAccount }}/{{ name }}/blob/{{ branch }}/CHANGELOG.md){{/unless_eq}}{{#if_eq githubAccount ""}}`CHANGELOG.md`{{/if_eq}}.

{{#issue}}{{#contribution}}
## :exclamation: Issues
Please make sure to read the [Issue Reporting Checklist](https://github.com/{{ githubAccount }}/{{ name }}/blob/{{ branch }}/CONTRIBUTING.md#issue-reporting-guidelines) before opening an issue. Issues not conforming to the guidelines may be closed immediately.
{{/contribution}}{{/issue}}

{{#contribution}}
## :muscle: Contribution
Please make sure to read the [Contributing Guide](https://github.com/{{ githubAccount }}/{{ name }}/blob/{{ branch }}/CONTRIBUTING.md) before making a pull request.
{{/contribution}}

## :copyright: License

[MIT](http://opensource.org/licenses/MIT)
