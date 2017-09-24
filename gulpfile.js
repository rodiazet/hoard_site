var gulp = require( 'gulp' );
var chug = require( 'gulp-chug' );
var deploy = require('gulp-deploy-git');
 
gulp.task( 'build_all', function () {
    gulp.src( 'Markup/frontpage/gulpfile.js' )
        .pipe( chug({tasks:['build']}) );
    gulp.src( 'Markup/contribution/gulpfile.js' )
        .pipe( chug({tasks:['build']}) );
    gulp.src( 'Markup/statistics/gulpfile.js' )
        .pipe( chug({tasks:['build']}) );
});

gulp.task( 'prepare_during', function () {
    gulp.src( 'Markup/contribution/gulpfile.js' )
        .pipe( chug({tasks:['prepare_during']}) );
});

gulp.task( 'prepare_after', function () {
    gulp.src( 'Markup/contribution/gulpfile.js' )
        .pipe( chug({tasks:['prepare_after']}) );
});

gulp.task( 'prepare_before', function () {
    gulp.src( 'Markup/contribution/gulpfile.js' )
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