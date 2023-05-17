const { utils } = require('@commitlint/config-lerna-scopes');

module.exports = {
	extends: [
		'@commitlint/config-conventional',
		'@commitlint/config-lerna-scopes'
	],
	rules: {
		'subject-case': [0],
		'scope-enum': (ctx) =>
			utils
				.getPackages(ctx)
				.then((packages) => [
					2,
					'always',
					[...packages, 'ci', 'version', 'root']
				])
	}
};
