'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.watch = true;

    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js.process'));
    $.gulp.watch('./source/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./source/template/**/*.pug', $.gulp.series('pug'))
      .on('all', (event, filepath, stats) => {
        $.emittyChangedFile.path = filepath;
        $.emittyChangedFile.stats =  stats
        
      });
    $.gulp.watch('./source/images/**/*.*', $.gulp.series('copy.image'));
  });
};


