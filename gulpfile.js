import gulp from 'gulp'
import { path, plugins } from './gulp/settings/settings.js'
import {html}	from './gulp/tasks/html.js'
import {js} from './gulp/tasks/js.js'

global.app = {
	gulp: gulp,
	path: path,
	plugins: plugins,
}

const watcher = () => {
	gulp.watch('./src/**/**/*.html', html),
	gulp.watch('./src/**/**/*.js', js)
}
const dev = gulp.series(
	html,
	js,
	watcher
)
gulp.task('dev', dev)
