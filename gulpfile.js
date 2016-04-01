var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var path = require('path');
var jade = require('gulp-jade');

// Config Sass

gulp.task('sass', function () {
  return gulp.src('assets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    //Destino
    .pipe(gulp.dest('assets/css/'));
});


// Conf jade

gulp.task('templates', function() {
  var YOUR_LOCALS = {};

  gulp.src('assets/jade/*.jade')
  .pipe(jade({
  locals: YOUR_LOCALS,
        pretty: true
  }))
  // destino
  .pipe(gulp.dest('./'))
});

//  conf web server
gulp.task('server', function() {
  gulp.src('')
    .pipe(webserver({
    //   host: '192.168.12.144',
      port: 7777,
      livereload: true
    }));
});


// wacth

gulp.task('watch', function() {
  gulp.watch('assets/jade/*.jade',['templates']);
  gulp.watch('assets/sass/*.scss', ['sass']);
})

// tareas default
gulp.task('default', ['sass','watch','server','templates']);
