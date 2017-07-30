var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass');
    
gulp.task('styles', function() {
    gulp.src('./app/**/*.scss')
    .pipe(sass())
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', function() {
    gulp.watch('./app/**/*.js',['scripts']);
    gulp.watch('./app/**/*.scss',['styles']);
    gulp.watch('**/*.html').on('change', browserSync.reload);
});

gulp.task('scripts', function(){
    gulp.src('./app/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function() {
  browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['styles', 'scripts', 'watch', 'serve']);