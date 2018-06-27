var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require('gulp-rename')

gulp.task('sass', function () {
  gulp.src('./src/**/*.scss', {base: './src'})
    .pipe(sass().on('error', sass.logError))
    .pipe(rename(function (path) {
      path.extname = '.wxss'
    }))
    .pipe(gulp.dest('output'))
})

gulp.task('carry', function () {
  gulp.src(['./src/**/*', '!./src/**/*.scss'], {base: './src'})
    .pipe(gulp.dest('output'))
})

gulp.task('watch', function () {
  gulp.watch('./src/**/*.scss', ['sass'])
  gulp.watch(['./src/**/*', '!./src/**/*.scss'], ['carry'])
})

gulp.task('default', ['sass', 'carry', 'watch'])
