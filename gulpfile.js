const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// Sass Task
function scssTask(){
  return src('src/scss/style.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest('dist', { sourcemaps: '.' }));
}

// JavaScript Task
function jsTask(){
  return src('src/js/script.js', { sourcemaps: true })
    .pipe(terser())
    .pipe(dest('dist', { sourcemaps: '.' }));
}

// Browsersync Tasks
function browsersyncServe(cb){
  browsersync.init({
    server: {
      baseDir: '.'
    }
  });
  cb();
}

function browsersyncReload(cb){
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask(){
  watch('*.html', browsersyncReload);
  watch(['src/scss/**/*.scss','src/styleComponents/**/*.scss', 'src/js/**/*.js'], series(scssTask, jsTask, browsersyncReload));
}

// Default Gulp task
exports.default = series(
  scssTask,
  jsTask,
  browsersyncServe,
  watchTask
);

let gulp = require('gulp'); 
let svgSprite = require('gulp-svg-sprite');

gulp.task('svgSprite', function () {
  return gulp.src('static/icons/footer-icons/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: "../facebook.svg",
          sprite: "../instagram.svg",
          sprite: "../twitter.svg",
          sprite: "../footer-logo.svg",
          sprite: "../newsletter.svg",
          sprite: "../arrow-top.svg",
          sprite: "../skype.svg",
        },
        mode: {
          view: { 
            bust: false,
            render: {
              scss: true 
            }
          },
          symbol: true
        }
      }
    }))
    .pipe(gulp.dest('static/sprite/icons/footer-icons/'));
}); 

config = {
    shape: {
      dimension: { // Set maximum dimensions
        maxWidth: 32,
        maxHeight: 32
      },
      spacing: { // Add padding
        padding: 10
      },
      dest: 'out/intermediate-svg' // Keep the intermediate files
    },
    mode: {
      view: { 
        bust: false,
        render: {
          scss: true 
        }
      },
      symbol: true 
    }
};
  
gulp.src('**/*.svg', { cwd: 'path/to/static' })
  .pipe(svgSprite(config))
  .pipe(gulp.dest('staticc'));
