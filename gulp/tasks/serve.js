'use strict';

module.exports = function() {
  $.gulp.task('serve', function() {
    let proxyOptions = $.url.parse('http://localhost:9000/api');
    proxyOptions.route = '/api';
    $.browserSync.init({
      open: false,
      server: {
        baseDir: $.config.root,
        middleware: [$.proxy(proxyOptions)]
      },
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
