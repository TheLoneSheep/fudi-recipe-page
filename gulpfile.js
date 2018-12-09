
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    return gulp.src('./sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ["last 5 versions"],
        cascade: false
    }))
    .pipe(gulp.dest('./css'))
});

gulp.task('watch', function() {
    gulp.watch('./sass/*.scss', gulp.series('sass'))
});

gulp.task('default', gulp.series(gulp.parallel('sass'), 'watch')
);