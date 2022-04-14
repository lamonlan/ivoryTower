/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	root: true,
	extends: [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"@vue/eslint-config-typescript/recommended",
		"@vue/eslint-config-prettier",
	],
	env: {
		"vue/setup-compiler-macros": true,
		node: true,
	},
	rules: {
		"@typescript-eslint/no-var-requires": 0,
		"vue/no-setup-props-destructure": "off",
	},
	overrides: [
		{
			files: ["src/views/**/*.vue", "src/components/**/*.vue"],
			rules: {
				"vue/multi-word-component-names": 0,
			},
		},
	],
};
