'use strict';


module.exports = function() {
  $.gulp.task('pug', function() {
    var  sourceOptions = $.watch ? { read: false } : {};

    return $.gulp.src($.path.template, sourceOptions)
      .pipe($.gp.if($.watch, $.emitty.stream($.emittyChangedFile.path, $.emittyChangedFile.stats)))
      .pipe($.gp.pug({ pretty: true }))
      .on('error', $.gp.notify.onError(function(error) {
        console.log(123);
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root));
  });
};
