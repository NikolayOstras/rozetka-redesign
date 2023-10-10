import gulp from 'gulp'
import { path, plugins } from './gulp/settings/settings.js'

import { build } from './gulp/task/build.js'
import { css } from './gulp/task/css.js'
import { html } from './gulp/task/html.js'
global.app = {
	gulp: gulp,
	path: path,
	plugins: plugins,
}

const watcher = () => {
	gulp.watch('./src/**/**/*.html', html)
	gulp.watch('./src/**/**/*.js', build)
}
const buildApp = gulp.series(html,build,css)
const dev = gulp.series(
	html,
	build,
	watcher
)

gulp.task('build', buildApp)
gulp.task('dev', dev)
