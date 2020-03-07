var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require(browsersync);
var reload = browserSync.reload

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

gulp.task('default', ['sass', 'browser-sync'], function() {
  // Any file that is inside scss folder. Each change will run the sass task
  gulp.watch('./assets/scss/**/*', ['sass'])
})


gulp.task('browser-sync', function() {
  browserSync.init({
    server: './public',
    notify: false,
    open: false
  })
})