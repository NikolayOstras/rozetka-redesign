let colors = {
	accent: '#36A26B'
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/**.{html,css}"],
	theme: {
		extend:{
			colors:colors,
			backgroundColor: colors,
			backgroundSize: {
				'110':'110%',
			}
		},

		screens: {
			xl: { max: '1279px' },
			lg: { max: '1023px' },
			md: { max: '767px' },
			sm: { max: '639px' },
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
