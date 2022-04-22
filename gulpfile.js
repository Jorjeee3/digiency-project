const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();
let gulp = require('gulp'); 
// let svgSprite = require('gulp-svg-sprite');

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
  // gulp.watch('*.html', browsersync.reload);
  // gulp.watch('*.dist/style.css').on('change', browsersync.reload) 
  // gulp.watch('*.dist/style.css', browsersync.reload);
  // gulp.watch(['src/scss/**/*.scss','src/styleComponents/**/*.scss', 'src/js/**/*.js', 'static/icons/*.svg'], series(scssTask, jsTask, browsersync.reload));
}

// Default Gulp task
exports.default = series(
  scssTask,
  jsTask,
  browsersyncServe,
  watchTask
);

