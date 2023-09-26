const libList = [
  // npm i -D normalize.css
  'node_modules/normalize.css/normalize.css',

  /* Swiper - слайдер */
  // 'node_modules/swiper/swiper-bundle.css',

  /* AOS - анімація */
  // 'node_modules/aos/dist/aos.css',
];

const libcss = () => {
  return $.gulp.src(libList)
    .pipe($.gp.plumber({
      errorHandler: $.gp.notify.onError(error => ({
        title: 'Lib CSS',
        message: error.message
      }))
    }))
    .pipe($.sass())
    .pipe($.gp.concat('libs.min.css'))
    .pipe($.gp.csso())
    .pipe($.gulp.dest($.path.scss.dest));
};

module.exports = libcss;