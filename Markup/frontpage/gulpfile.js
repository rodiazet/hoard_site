var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var htmlreplace = require('gulp-html-replace');
var copy = require('gulp-contrib-copy');
var del = require('del');
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');
var buildPath = 'build';

gulp.task('minifyjs', function() {
    return gulp.src('build/js/all.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js/minjs/'))
});

gulp.task('concat', function() {
    return gulp.src(['js/jquery-2.2.3.min.js',
    'js/modernizr-3.3.1.min.js',
    'js/bootstrap.min.js',
    'js/jquery.classycountdown.min.js',
    'js/jquery.knob.js',
    'js/jquery.throttle.js',
    'js/slick.min.js',
    'js/lity.min.js',
    'js/main.js',
    'js/header.js',
    'js/module-teaserbox.js',
    'js/module-countdown.js',
    'js/module-investor.js',
    'js/module-team.js',
    'js/module-slideshow.js',
    'js/mailchimp.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('build/js/'));
});

gulp.task('minifycss', function() {
     return gulp.src('css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('build/css/'));
  });

gulp.task('replacehtml', function() {
    return gulp.src('index.html')
      .pipe(htmlreplace({
          'js': 'js/minjs/all.js'
      }))
      .pipe(gulp.dest('build/'));
});


gulp.task('copy', function () {
    gulp.src('fonts/**/*')
        .pipe(copy())
        .pipe(gulp.dest('build/fonts/'));
    gulp.src('images/**/*')
        .pipe(copy())
        .pipe(gulp.dest('build/images/'));
    return gulp.src('scss/**/*')
        .pipe(copy())
        .pipe(gulp.dest('build/scss/'));
});

gulp.task('cleanup',function(){
    return del('build/');
});

gulp.task('build', function(callback) {
    runSequence('cleanup',
                'copy', 
                'concat',
                'minifyjs',
                'replacehtml',
                'minifycss',
                callback);
});


