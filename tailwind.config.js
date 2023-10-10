let colors = {
	transparent: 'transparent',
	white: '#ffffff',
	black: '#000000',
	mainColor: '#393939',
	accent: '#36A26B'
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/**.{html,scss}"],
	theme: {
		colors: colors,
		backgroundColors: colors,
		screens: {
			xl: { max: '1279px' },
			// => @media (max-width: 1279px) { ... }

			lg: { max: '1023px' },
			// => @media (max-width: 1023px) { ... }

			md: { max: '767px' },
			// => @media (max-width: 767px) { ... }

			sm: { max: '639px' },
			// => @media (max-width: 639px) { ... }
		},
		fonts: {
			'sans-serif': 'Arial',
			serif: 'Georgia',
		},
		zIndex: {
			auto: 'auto',
			0: 0,
			1: 1,
			2: 2,
			3: 3,
			4: 4,
			5: 5,
		},
	},
  plugins: [],
}