const coffee = require('coffee-script');
const fs = require('fs');
const uglify = require('uglify-js');

exports.build = function (file, cb) {
  fs.readFile(file, (err, data) => {
    if (err) {
      return cb(err, null);
    } else {
      try {
        const compiled = coffee.compile(data.toString(), {bare: true});
        const result = uglify.minify(compiled, {fromString: true});

        cb(null, result.code);
      } catch (e) {
        cb(e, null);
      }
    }
  });
};
