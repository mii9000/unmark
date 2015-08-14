var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');

gulp.task('compress', function(){
	gulp.src('unmark.js')
		.pipe(uglify('unmark.min.js'))
		.pipe(gulp.dest('build'))
});

gulp.task('default', ['compress']);