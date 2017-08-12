'use strict';
var util = require('gulp-util');

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    template: require('./gulp/paths/template.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js')
  },
  util: util,
  gulp: require('gulp'),
  rimraf: require('rimraf'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')({pattern: ['gulp-*', 'gulp.*', '@*/gulp{-,.}*']}),
  emittyChangedFile: {},
  watch: false,
  emitty: require('emitty').setup('./source/template/', 'pug', {
    makeVinylFile: true
  }),
  production: !!util.env.production
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

if (!$.production) {
  $.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
      'sass',
      'pug',
      'js.process',
      'css.foundation',
      'copy.image',
      'copy.font'
    ),
    $.gulp.parallel(
      'watch',
      'serve'
    )
  ));
} else {
  $.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
      'sass-build',
      'pug',
      'js.process',
      'css.foundation',
      'copy.image',
      'copy.font'
    )));
}


$.gulp.task('sprites', $.gulp.series(
  'sprite:svg'
  //'sprite:png'
 ));


