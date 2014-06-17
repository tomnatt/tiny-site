var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('uglify', function() {
  return gulp.src(['one.js', 'two.js'])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('.'));
});

