var gulp = require("gulp");
var del = require('del');
var run = require('gulp-run');

gulp.task('generate-dynamic-readme', function () {
  return run('node docs/index.js', { verbosity: 0 }).exec();
})

gulp.task('copy-readme', function () {
  return gulp.src('./README.md')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('clean', function () {
  return del('./dist/src/apps/sh/**', { force: true });
})

gulp.task('shellScriptFiles', function () {
  return gulp.src('./src/apps/sh/*.sh')
    .pipe(gulp.dest('./dist/src/apps/sh'));
});

gulp.task('gen-docs', gulp.series('generate-dynamic-readme', 'copy-readme'));
gulp.task('default', gulp.parallel('clean', 'gen-docs', 'shellScriptFiles'));
