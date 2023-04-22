/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'sun-gold': '#ffce50',
				'emerald-green': '#297F72',
				'emerald-green-dark': '#1B5280',
				
			},
			width: {
			},
			maxWidth: {
			}
		},
		fontFamily: {
			'bahnschrift': ['"Bahnschrift"', 'sans-serif'],
			'sans': ['"Bahnschrift"', ...defaultTheme.fontFamily.sans],
		},
	},
	plugins: [],
}