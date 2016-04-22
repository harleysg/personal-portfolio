var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    sass = require('gulp-sass'),
    path = require('path'),
    jade = require('gulp-jade');

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

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      port: 7777,
      // open: true,
      // livereload: true
    }));
});

// wacth

gulp.task('watch', function() {
  gulp.watch('assets/jade/*.jade',['templates']);
  gulp.watch('assets/sass/*.scss', ['sass']);
})

// tareas default
gulp.task('default', ['sass','watch','webserver','templates']);
