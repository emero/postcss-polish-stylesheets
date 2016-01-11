var gulp = require('gulp');
var mocha = require('gulp-mocha');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('test', function () {
  return gulp.src('test/test.js', { read: false })
    .pipe(mocha())
    .on("error", handleError);
});

gulp.task('default', ['test']);
