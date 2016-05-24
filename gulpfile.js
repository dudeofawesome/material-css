'use strict';

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

gulp.task('watch:demo', () => {
    gulp.watch(['*.scss'], ['build:sass:demo']);
});

gulp.task('dev', ['watch:demo']);

gulp.task('default', ['build:sass:demo']);
