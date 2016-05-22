//Dependencias
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var csslintStylish = require('csslint-stylish');
var nodemon = require('gulp-nodemon');
var csslint = require('gulp-csslint');
var imagemin = require('gulp-imagemin');

//Tarea default
gulp.task('default', ['browser-sync']);


//Tarea jshintjs
gulp.task('lint:js', function() {
  return gulp.src('./public/js/client.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
});

//Tarea lintcss
gulp.task('lint:css', function() {
  gulp.src('public/css/main.css')
    .pipe(csslint())
    .pipe(csslint.reporter(csslintStylish));
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

//Optimizar imágenes
gulp.task('img', function () {
	gulp.src('public/css/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('public/css/images'))
});