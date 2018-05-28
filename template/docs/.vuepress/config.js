module.exports = {
	locales: {
		'/': {
			lang: 'en-US',
			title: '{{ classify name }}',
			description: '{{ classify name }} for Vue.js'
		}
	},
	themeConfig: {
		repo: '{{ githubAccount }}/{{ name }}',
		docsDir: 'docs',
		locales: {
			'/': {
				label: 'English',
				selectText: 'Languages',
				editLinkText: 'Edit this page on GitHub',
				nav: [{
					text: 'Release Notes',
					link: 'https://github.com/{{ githubAccount }}/{{ name }}/releases'
				}],
				sidebar: [
					'/installation.md',
					'/started.md',
				]
			}
		}
	}
}

