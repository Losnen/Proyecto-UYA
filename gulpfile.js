//Dependencias
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var nodemon = require('gulp-nodemon');


//Tarea default
gulp.task('default', ['nodemon']);


//Tarea jshintjs
gulp.task('lint', function() {
  return gulp.src('./public/js/client.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
});


//Tarea Browser-sync
gulp.task('browser-sync', ['nodemon'], () => {
  browserSync.init(null, {
    proxy: 'http://localhost:3000',
    files: ['public/*.html','public/js/*.js','public/css/*.css'],
    port: 2121
  });
});

//Tarea nodemon
gulp.task('nodemon',function(cb) {
  var started = false;
  return nodemon({
    script: './app.js'
  }).on('start', function() {
    if (!started) {
      cb();
      started = true;
    }
  });
});
