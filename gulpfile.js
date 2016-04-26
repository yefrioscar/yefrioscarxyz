const gulp = require('gulp');
const imageop = require('gulp-image-optimization');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const webserver = require('gulp-webserver');
const minifyCSS = require('gulp-minify-css');

var config = {
  images: {
    watch: ['./src/images/*.png', './src/images/*.jpg'],
    output: './build/images'
  }
}


gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8080,
      livereload: true
    }));
});


gulp.task('images', function() {
  gulp.src(config.images.watch)
    .pipe(imageop({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(config.images.output));
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/css'));
});


gulp.task('babel', () => {
	return gulp.src('./src/js/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./build/js/'));
});



gulp.task('watch', function() {
  gulp.watch(config.images.watch, ['images']);
  gulp.watch('./src/sass/*.scss', ['sass']);
  gulp.watch('./src/js/*.js', ['babel']);

});


gulp.task('default', ['webserver', 'watch']);
