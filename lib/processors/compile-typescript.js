const type = require('typescript');
const fs = require('fs');
const uglify = require('uglify-js');

exports.build = function (file, cb) {
  fs.readFile(file, (err, data) => {
    if (err) {
      return cb(err, null);
    } else {
      try {
        const compiled = type.transpile(data.toString());
        const result = uglify.minify(compiled, {fromString: true});

        cb(null, result.code);
      } catch (e) {
        cb(e, null);
      }
    }
  });
};
