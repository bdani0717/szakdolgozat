module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
	},
	"extends": "eslint:recommended",
	"overrides": [
		{
			"env": {
				"node": true,
			},
			"files": [
				".eslintrc.{js,cjs}",
			],
			"parserOptions": {
				"sourceType": "script",
			},
		},
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module",
	},
	"rules": {
		"semi": [ 2, "always" ],
		"quotes": [ 2, "double" ],
		"block-scoped-var": "error",
		"curly": "error",
		"eqeqeq": "error",
		"no-floating-decimal": "error",
		"array-bracket-spacing": [ 2, "always" ],
		"arrow-parens": [ 2, "always" ],
		"arrow-spacing": [ 2, { "before": true, "after": true } ],
		"block-spacing": [ 2, "always" ],
		"comma-dangle": [ 2, "always-multiline" ],
		"comma-spacing": [ 2, { "before": false, "after": true } ],
		"computed-property-spacing": [ 2, "never" ],
		"indent": [ "error", "tab" ],
		"key-spacing": [ 2, {"beforeColon": false, "afterColon": true} ],
		"keyword-spacing": [ 2, {"before": true, "after": true} ],
	},
};
