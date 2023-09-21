module.exports = {
	'env': {
		'browser': true,
		'es2017': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/vue3-essential'
	],
	'parserOptions': {
		'ecmaVersion': 6,
		'sourceType': 'module'
	},
	'plugins': [
		'vue'
	],
	'rules': {
		// 'indent': [
		// 	'error',
		// 	'tab'
		// ],
		// 'linebreak-style': [
		// 	'error',
		// 	'unix'
		// ],
		// 'quotes': [
		// 	'error',
		// 	'single'
		// ],
		// 'semi': [
		// 	'error',
		// 	'never'
		// ]
	}
}
