'use strict';

module.exports = function() {
  $.gulp.task('serve', function() {
    $.browserSync.init({
      open: false,
      server: $.config.root,
      rewriteRules: [
        {
          match: /Content-Security-Policy/,
          fn: function(match) {
              return "DISABLED-Content-Security-Policy";
          }
        }
      ],
    });

    $.browserSync.watch([$.config.root + '/**/*.*', '!**/*.css'], $.browserSync.reload);
  });
};
