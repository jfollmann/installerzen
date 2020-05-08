var gulp = require("gulp");
var del = require('del');

gulp.task('clean', function () {
  return del('./dist/src/apps/sh/**', { force: true });
})

gulp.task('readme', function () {
  return gulp.src('./README.md')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('shellScriptFiles', function () {
  return gulp.src('./src/apps/sh/*.sh')
    .pipe(gulp.dest('./dist/src/apps/sh'));
});

gulp.task('default', gulp.parallel('clean', 'readme', 'shellScriptFiles'));
