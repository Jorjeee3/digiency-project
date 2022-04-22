const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();
let gulp = require('gulp'); 

// Sass Task
function scssTask(){
  return src('src/scss/style.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest('dist', { sourcemaps: '.' }))
}

// JavaScript Task
function jsTask(){
  return src('src/js/script.js', { sourcemaps: true })
    .pipe(terser())
    .pipe(dest('dist', { sourcemaps: '.' }))
}


function browsersyncServe(cb){
  browsersync.init({
    server: {
      baseDir: '.'
    }    
  });
  cb();
}


function browsersyncReload() {
  browsersync.reload();
  cb();
}


// Watch Task
function watchTask(){
  watch('*.html', browsersyncReload)
  watch(['src/scss/**/*.scss', 'src/js/**/*.js', 'src/styleComponents/**/*.scss'], series(scssTask, jsTask, browsersyncReload))
}

exports.default = series(
  scssTask,
  jsTask,
  browsersyncServe,
  watchTask
);

