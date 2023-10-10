import autoprefixer from 'gulp-autoprefixer'
import cleanCss from 'gulp-clean-css'
import groupCssMediaQueries from 'gulp-group-css-media-queries'

export const css = () => {
	return app.gulp
		.src(`${app.path.build.css}style.css`, {})
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'CSS',
					message: 'Error: <%= error.message %>',
				})
			)
		)
		.pipe(groupCssMediaQueries())
		.pipe(
			autoprefixer({
				grid: true,
				overrideBrowserslist: ['last 3 version'],
				cascade: true,
			})
		)
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(cleanCss())
		.pipe(app.plugins.rename({ suffix: '.min' }))
		.pipe(app.gulp.dest(app.path.build.css))
}
