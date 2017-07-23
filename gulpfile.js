var gulp = require('gulp');
    uglify = require('gulp-uglify');
    

gulp.task('watch', function(){
    console.log('gulp watch task...');
    var watcher = gulp.watch('./app/js/*.js');
    watcher.on('change', function(event){
        console.log('File: ' + event.path + ' was changed!');
    });
});

gulp.task('uglify', function(){
    console.log('gulp uglify task...');
    gulp.src('./app/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('scripts', function(){
    console.log('gulp scripts task...');
});

gulp.task('default', ['scripts', 'watch', 'uglify']);