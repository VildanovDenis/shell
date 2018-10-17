var gulp      = require('gulp'), 
    sass        = require('gulp-sass'), 
    browserSync = require('browser-sync'),
    cssnano     = require('gulp-cssnano'),
    rename      = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){ 
    return gulp.src('app/sass/**/*.scss') 
        .pipe(sass()) 
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/css')) 
        .pipe(browserSync.reload({stream: true})) 
});

gulp.task('css-libs', ['sass'], function() {
    return gulp.src('app/css/style.css') 
        .pipe(cssnano()) 
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css')); 
});

gulp.task('browser-sync', function() { 
    browserSync({ 
        server: { 
            baseDir: 'app' 
        },
        notify: false 
    });
});

gulp.task('watch', ['browser-sync','css-libs', 'sass'], function() {
  gulp.watch('app/sass/**/*.scss', ['sass']); 
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload); 
});