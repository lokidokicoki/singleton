import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task(`babel`, () => {
  return gulp.src('./src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest(`./dist`));
});

gulp.task(`watch:babel`, () => {
  gulp.watch(`./src/**/*.js`, gulp.series(`babel`));
});

gulp.task(`watch`,
  gulp.parallel(
    `watch:babel`
  )
);

gulp.task(`default`, gulp.series(`babel`, `watch`));
