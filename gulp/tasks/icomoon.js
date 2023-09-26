const icomoon = () => {
  return $.gulp.src($.path.icomoon.src)
    .pipe($.gp.plumber({
      errorHandler: $.gp.notify.onError(error => ({
        title: 'ICOMOON',
        message: error.message
      }))
    }))
    .pipe($.gulp.dest($.path.icomoon.dest))
    .pipe($.browserSync.stream());
};

module.exports = icomoon;