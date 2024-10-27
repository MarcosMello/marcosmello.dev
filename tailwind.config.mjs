/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'white': '#FBF8F4',
				'black': '#1F1F1F',
				'purple': '#9D76C1',
				'dark-purple': '#452B5D',
			},

			fontFamily: {
				'sans': ['"Inter"', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
