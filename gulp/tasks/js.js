import gulpEsbuild from 'gulp-esbuild';

export const js = () => {
	return app.gulp
		.src(app.path.src.js)
		.pipe(
			gulpEsbuild({
				outfile: 'app.js',
				bundle: true,
				// minify: true,
			})
		)
		.pipe(app.gulp.dest(app.path.build.js))
};
