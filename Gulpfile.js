var gulp = require('gulp');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('build', function() {

    return gulp.src(['one.js', 'two.js'])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('.'));
});