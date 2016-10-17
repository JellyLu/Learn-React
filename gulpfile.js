var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');

gulp.task('default', function(){
    var bundle = browserify({entries: './public/index.js', debug: true})
      .transform('reactify')
      .bundle()
      .pipe(source('deps.min.js'))
      .pipe(gulp.dest('./public/dist'));
});
