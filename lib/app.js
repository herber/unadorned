const sass = require('./processors/compile-sass');
const less = require('./processors/compile-less');
const stylus = require('./processors/compile-stylus');
const coffee = require('./processors/compile-coffee');
const type = require('./processors/compile-typescript');
const md = require('./processors/compile-markdown');
const ejs = require('./processors/compile-ejs');
const pug = require('./processors/compile-pug');

const { fileName, save } = require('./helpers');

const recursive = require('recursive-readdir');

exports.dir = function (expdir, expoutdir, cb) {
  let expfiles = [];
  let experr;

  recursive(expdir, function (err, files) {
    if (err) experr = err;

    for (var i = 0; i < files.length; i++) {

      expfiles[i] = files[i];

      if (files[i].indexOf('.coffee') > 0) {
        //coffee
        const currentFile = files[i];

        coffee.build(files[i], function (err, data) {
          if (err) experr = err;

          const file = fileName(currentFile);
          save(expoutdir, file + '.js', data);
        });
      } else if (files[i].indexOf('.ejs') > 0) {
        //ejs
        const currentFile = files[i];

        ejs.build(files[i], function (err, data) {
          if (err) experr = err;

          const file = fileName(currentFile);
          save(expoutdir, file + '.html', data);
        });
      } else if (files[i].indexOf('.less') > 0) {
        //less
        const currentFile = files[i];

        less.build(files[i], function (err, data) {
          if (err) experr = err;

          const file = fileName(currentFile);
          save(expoutdir, file + '.css', data);
        });
      } else if (files[i].indexOf('.md') > 0) {
        //markdown
        const currentFile = files[i];

        md.build(files[i], function (err, data) {
          if (err) experr = err;

          const file = fileName(currentFile);
          save(expoutdir, file + '.html', data);
        });
      } else if (files[i].indexOf('.pug') > 0 || files[i].indexOf('.jade') > 0) {
        //pug
        const currentFile = files[i];

        pug.build(files[i], function (err, data) {
          if (err) experr = err;

          const file = fileName(currentFile);
          save(expoutdir, file + '.html', data);
        });
      } else if (files[i].indexOf('.sass') > 0 || files[i].indexOf('.scss') > 0) {
        //sass
        const currentFile = files[i];

        sass.build(files[i], function (err, data) {
          if (err) experr = err;

          const file = fileName(currentFile);
          save(expoutdir, file + '.css', data);
        });
      } else if (files[i].indexOf('.stylus') > 0 || files[i].indexOf('.styl') > 0) {
        //stylus
        const currentFile = files[i];

        stylus.build(files[i], function (err, data) {
          if (err) experr = err;

          const file = fileName(currentFile);
          save(expoutdir, file + '.css', data);
        });
      } else if (files[i].indexOf('.ts') > 0) {
        //typescript
        const currentFile = files[i];

        type.build(files[i], function (err, data) {
          if (err) experr = err;

          const file = fileName(currentFile);
          save(expoutdir, file + '.js', data);
        });
      }
    }

    cb(experr, expfiles);
  });
};
