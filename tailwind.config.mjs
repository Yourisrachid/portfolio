/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {      
			fontFamily: {
			'plex': ['"IBM Plex Sans"', 'sans-serif'], 
			'alegreya': ['"IBM Plex Sans", sans-serif'],
		  },
		},
	},
	plugins: [],
}
