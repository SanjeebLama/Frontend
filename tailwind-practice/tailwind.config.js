/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		// Clipboard Project
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			colors: {
				strongCyan: 'hsl(171, 66%, 44%)',
				lightBlue: 'hsl(233, 100%, 69%)',
				darkGrayishBlue: 'hsl(210, 10%, 33%)',
				grayishBlue: 'hsl(201, 11%, 66%)',
			},
			fontFamily: {
				sans: ['var(--font-bai)', 'sans-serif'],
			},
		},
		plugins: [],
	},
};
