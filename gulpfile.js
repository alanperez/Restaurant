var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

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
});