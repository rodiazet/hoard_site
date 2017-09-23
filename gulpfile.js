var gulp = require( 'gulp' );
var chug = require( 'gulp-chug' );
var deploy = require('gulp-deploy-git');
 
gulp.task( 'build_all', function () {
    gulp.src( 'Markup/frontpage/gulpfile.js' )
        .pipe( chug({tasks:['build']}) )
} );

gulp.task('deploy', function() {
    return gulp.src('Markup/frontpage/build/**/*',{ read: false })
      .pipe(deploy({
        repository: 'ssh://git@bitbucket.org/ddeploy12/frontpage.git',
        verbose: true,
        debug: true
      }));
});