import notify from 'gulp-notify'
import plumber from 'gulp-plumber'

export const path = {
	build: {
		html: './build/',
		js: './build/js/',
	},
	src: {
		html: './src/*.html',
		js: './src/app.js',
	}
}

export const plugins = {
	notify,
	plumber,
}
