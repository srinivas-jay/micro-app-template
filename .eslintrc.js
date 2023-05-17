module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@nrwl/nx/react-typescript',
		'plugin:@typescript-eslint/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
	env: {
		browser: true,
		es2021: true,
		jest: true
	},
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'react/display-name': 'off',
		'no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_'
			}
		],
		'no-debugger': 'warn',
		'no-alert': 'warn',
		'no-await-in-loop': 'off',
		'arrow-body-style': ['error', 'as-needed'],
		'prefer-destructuring': [
			'error',
			{
				object: true,
				array: false
			}
		]
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
};
