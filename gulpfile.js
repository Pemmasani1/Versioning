const gulp = require('gulp')
var bump = require('gulp-bump')

gulp.task('bump', function() {
     return gulp
          .src('./config.json')
          .pipe(bump())
          .pipe(gulp.dest('./'));
});

gulp.task('config', ['bump'], function() {
     var configJson = require('./config.json');
     return ngConstant({
             constants: configJson,
             stream: true,
             name: 'app.constants'
          })
          .pipe(gulp.dest('./www/app/core'));
});
