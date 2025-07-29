import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs}'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: { globals: globals.browser },
	},
	{
		rules: {
			'no-unused-vars': 'warn',
			camelcase: ['error', { properties: 'always' }],
			'no-console': ['error', { allow: ['warn', 'error'] }],
			'no-debugger': 'error',
			'arrow-body-style': ['error', 'as-needed'],
			'capitalized-comments': [
				'error',
				'always',
				{
					// Extend with keywords as needed
					ignorePattern: 'function',
					ignoreConsecutiveComments: true,
				},
			],
		},
	},
	eslintPluginPrettier,
]);
