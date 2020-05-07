var gulp = require("gulp");
var del = require('del');

gulp.task('clean', function () {
  return del('./dist/src/apps/sh/**', { force: true });
})

gulp.task('shellScriptFiles', function () {
  return gulp.src('./src/apps/sh/*.sh')
    .pipe(gulp.dest('./dist/src/apps/sh'));
});

gulp.task('default', gulp.parallel('clean', 'shellScriptFiles'));
