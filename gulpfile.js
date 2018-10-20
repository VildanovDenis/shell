var gulp      = require('gulp'), 
    sass        = require('gulp-sass'), 
    browserSync = require('browser-sync'),
    cssnano     = require('gulp-cssnano'),
    rename      = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    del         = require('del'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglifyjs'),
    imagemin    = require('gulp-imagemin'), 
    pngquant    = require('imagemin-pngquant'),
    cache       = require('gulp-cache');

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

gulp.task('scripts', function() {
    return gulp.src('app/js/carousel.js')
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/js'));
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
  gulp.watch('app/sass/**/*.scss', ['sass']); 
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload); 
});

gulp.task('clean', function() {
    return del.sync('dist'); 
});

gulp.task('img', function() {
    return gulp.src('app/img/**/*') 
        .pipe(cache(imagemin({  
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img')); 
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {

    var buildCss = gulp.src([ 
        'app/css/style.css',
        'app/css/style.min.css'
        ])
    .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*') 
    .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/**/*') 
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html') 
    .pipe(gulp.dest('dist'));

});