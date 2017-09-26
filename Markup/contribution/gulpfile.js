var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var htmlreplace = require('gulp-html-replace');
var copy = require('gulp-contrib-copy');
var del = require('del');
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');
var git = require('gulp-git');
var htmlmin = require('gulp-htmlmin');
var rename = require('gulp-rename-assets');

gulp.task('minifyjs', function() {
    gulp.src('build/js/before.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js/minjs/'));

    gulp.src('build/js/during.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js/minjs/'));

    return gulp.src('build/js/after.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js/minjs/'))
});

gulp.task('concatcss', function() {
    return gulp.src(['css/bootstrap.min.css',
    'css/font-awesome.min.css',
    'css/contribution.css'])
    .pipe(concat('all.css'))
    .pipe(gulp.dest('build/css/'));
});

gulp.task('concatjs_before', function() {
    return gulp.src(['js/jquery-2.2.3.min.js',
    'js/modernizr-3.3.1.min.js',
    'js/bootstrap.min.js',
    'js/jquery.classycountdown.min.js',
    'js/jquery.knob.js',
    'js/jquery.throttle.js',
    'js/main.js',
    'js/module-countdown.js',
    'js/base-contribution.js'])
    .pipe(concat('before.js'))
    .pipe(gulp.dest('build/js/'));
});
gulp.task('concatjs_during', function() {
    return gulp.src(['js/jquery-2.2.3.min.js',
    'js/modernizr-3.3.1.min.js',
    'js/bootstrap.min.js',
    'js/jquery.classycountdown.min.js',
    'js/jquery.knob.js',
    'js/jquery.throttle.js',
    'js/main.js',
    'js/module-countdown.js',
    'js/base-contribution.js',
    'js/during-contribution.js',
    'js/during-balance.js'])
    .pipe(concat('during.js'))
    .pipe(gulp.dest('build/js/'));
});
gulp.task('concatjs_after', function() {
    return gulp.src(['js/jquery-2.2.3.min.js',
    'js/modernizr-3.3.1.min.js',
    'js/bootstrap.min.js',
    'js/jquery.classycountdown.min.js',
    'js/main.js'])
    .pipe(concat('after.js'))
    .pipe(gulp.dest('build/js/'));
});

gulp.task('minifycss', function() {
     return gulp.src('build/css/all.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('build/mincss/'));
  });

gulp.task('replacehtml', function() {
    gulp.src('during.html')
    .pipe(htmlreplace({
        'css':'mincss/all.css',
        'js': 'js/minjs/during.js'
    }))
    .pipe(gulp.dest('build/tags_replaced'));

    gulp.src('after.html')
    .pipe(htmlreplace({
        'css':'mincss/all.css',
        'js': 'js/minjs/after.js'
    }))
    .pipe(gulp.dest('build/tags_replaced'));


    return gulp.src('before.html')
      .pipe(htmlreplace({
          'css':'mincss/all.css',
          'js': 'js/minjs/before.js'
      }))
      .pipe(gulp.dest('build/tags_replaced'));
});


gulp.task('copy', function () {
    gulp.src('fonts/**/*')
        .pipe(copy())
        .pipe(gulp.dest('build/fonts/'));
    gulp.src('images/**/*')
        .pipe(copy())
        .pipe(gulp.dest('build/images/'));
    gulp.src('web.config')
        .pipe(copy())
        .pipe(gulp.dest('build/'));
    return gulp.src('scss/**/*')
        .pipe(copy())
        .pipe(gulp.dest('build/scss/'));
});

gulp.task('cleanup',function(){
    return del('build/');
});

gulp.task('minifyhtml', function() {
    gulp.src('build/tags_replaced/during.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build/hidden_resources'));

    gulp.src('build/tags_replaced/after.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build/hidden_resources'));

    return gulp.src('build/tags_replaced/before.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build/hidden_resources'));
});

gulp.task('prepare_before', function () {
    gulp.src('build/hidden_resources/before.html')
    .pipe(copy())
    .pipe(gulp.dest('build/'));
});

gulp.task('prepare_after', function () {
    gulp.src('build/hidden_resources/after.html')
    .pipe(copy())
    .pipe(gulp.dest('build/'));
});

gulp.task('prepare_during', function () {
    gulp.src('build/hidden_resources/during.html')
    .pipe(copy())
    .pipe(gulp.dest('build/'));
});

gulp.task('cleanup_tags_replaced',function(){
    return del('build/tags_replaced');
});

gulp.task('build', function(callback) {
    runSequence('cleanup',
                'copy', 
                'concatjs_before',
                'concatjs_during',
                'concatjs_after',
                'minifyjs',
                'replacehtml',
                'concatcss',
                'minifycss',
                'minifyhtml',
                'cleanup_tags_replaced',
                callback);
});


