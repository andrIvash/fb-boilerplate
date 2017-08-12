'use strict';

module.exports = function() {
  $.gulp.task('sass', function() {
    return $.gulp.src('./source/style/app.scss')
      .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' }))
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
      .pipe($.gp.stylelint({
        reporters: [
          {formatter: 'string', console: true}
        ]
      }).on('error', $.gp.notify.onError({title: 'stylelint error'})))
      .pipe($.gulp.dest($.config.root + '/assets/css'))
      .pipe($.browserSync.stream());
  })
};
