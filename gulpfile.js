var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('mytask', function () {
  return gulp.src('source-files') 
    .pipe(plugin()) 
    .pipe(gulp.dest('folder')) 