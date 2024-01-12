module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#6d28d9',

					secondary: '#075985',

					accent: '#a855f7',

					neutral: '#818cf8',

					'base-100': '#1f2937',

					info: '#06b6d4',

					success: '#22c55e',

					warning: '#fbbf24',

					error: '#ef4444',
				},
			},
		],
	},
	plugins: [require('daisyui')],
}
