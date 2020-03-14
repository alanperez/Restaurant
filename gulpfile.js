var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require(browsersync);
var reload = browserSync.reload
var cleanCSS = require('gulp-clean-css')
var sourcemaps = require('gulp-sourcemaps')
gulp.task('sass', function() {
  // location of scss files
  return gulp.src('./assets/scss/**/*.scss')
  // run sass on the files
  .pipe(sass().on('error', sass.logError))
  // this will add extra prefixes to the converted css files 
  .pipe(autoprefixer({
    browsers: ['last 2 versions']
  }))
  // export to destination '/css'
  .pipe(gulp.dest('./public/css'))
  // Reloads page
  .pipe(browserSync.stream())
});

gulp.task('sass:minify', function() {
  // location of scss files
  return gulp.src('./public/css/*.css')
  .pipe(sourcemaps.init())
  .pipe(cleanCSS())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./public/css'))
  // // Reloads page
  // .pipe(browserSync.stream())
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: './public',
    notify: false,
    open: false
  })
})

gulp.task('default', ['sass','webpack' 'browser-sync'], function() {
  // Any file that is inside scss folder. Each change will run the sass task
  gulp.watch('./assets/scss/**/*', ['sass'])
  gulp.watch('./assets/js/**/*', ['webpack'])
})

gulp.task('production', ['sass:minify'])
