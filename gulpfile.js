var gulp = require( 'gulp' );
var chug = require( 'gulp-chug' );
var deploy = require('gulp-deploy-git');
var runSequence = require('run-sequence');
 
gulp.task( 'build_stats', function () {
    return gulp.src( 'Markup/statistics/gulpfile.js' )
        .pipe( chug({tasks:['build']}) );
});

 
gulp.task( 'build_contribution', function () {
        return gulp.src( 'Markup/contribution/gulpfile.js' )
            .pipe( chug({tasks:['build']}) );
});
 
gulp.task( 'build_frontpage', function () {
        return gulp.src( 'Markup/frontpage/gulpfile.js' )
            .pipe( chug({tasks:['build']}) );
});

gulp.task('build_all', function(callback) {
    runSequence('build_frontpage',
                'build_contribution', 
                'build_stats',
                callback);
});

gulp.task( 'prep_test', function (callback) {
    runSequence('prepare_before',
                'prepare_during', 
                'prepare_after',
                callback);
});

gulp.task( 'prepare_during', function () {
    return gulp.src( 'Markup/contribution/gulpfile.js' )
        .pipe( chug({tasks:['prepare_during']}) );
});

gulp.task( 'prepare_after', function () {
    return gulp.src( 'Markup/contribution/gulpfile.js' )
        .pipe( chug({tasks:['prepare_after']}) );
});

gulp.task( 'prepare_before', function () {
    return gulp.src( 'Markup/contribution/gulpfile.js' )
        .pipe( chug({tasks:['prepare_before']}) );
});


gulp.task('deploy', function() {
    return gulp.src('Markup/frontpage/build/**/*',{ read: false })
      .pipe(deploy({
        repository: 'ssh://git@bitbucket.org/ddeploy12/frontpage.git',
        verbose: true,
        debug: true
      }));
});