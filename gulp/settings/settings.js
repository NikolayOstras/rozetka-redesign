// path
export const path = {
	build: {
		html: './build/',
		css: './build/css/',
		js: './build/js/',
	},
	src: {
		html: './src/index.html',
		js: './src/app.js',
	},
	clean: './build',
}

// plugins

import notify from 'gulp-notify'
import plumber from 'gulp-plumber'

export const plugins = {
	notify,
	plumber,
}
