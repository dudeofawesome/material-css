const gulp = require('gulp');

let sass;
gulp.task('build:sass:demo', () => {
  if (!sass) {
    sass = require('gulp-sass');
  }
  gulp.src(['demo/css/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('demo/css'));
});

let stylelint;
gulp.task('lint:sass', () => {
  if (!stylelint) {
    stylelint = require('gulp-stylelint');
  }
  gulp.src(['*.scss'])
    .pipe(stylelint({reporters: [{formatter: 'string', console: true}]}));
});

gulp.task('watch:demo', () => {
  gulp.watch(['*.scss'], ['build:sass:demo']);
});

gulp.task('lint', ['lint:sass']);
gulp.task('build', ['build:sass:demo']);
gulp.task('dev', ['watch:demo']);
gulp.task('default', ['build:sass:demo']);
