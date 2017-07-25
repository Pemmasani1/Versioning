const gulp = require('gulp')
var bump = require('gulp-bump')

gulp.task('bump', function() {
     return gulp
          .src('./config.json')
          .pipe(bump())
          .pipe(gulp.dest('./'));
});
