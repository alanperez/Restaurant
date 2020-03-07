var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  // location of scss files
  return gulp.src('./assets/scss/**/*.scss')
  // run sass on the files
  .pipe(sass().on('error', sass.logError))
  // export to destination '/css'
  .pipe(gulp.dest('./public/css'))
});