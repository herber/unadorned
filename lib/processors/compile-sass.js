const sass = require('node-sass');

exports.build = function (file, cb) {
  sass.render({
    file: file,
    outputStyle: 'compressed'
    },
    function(err, result) {
      if (err) {
        return cb(err, null);
      } else {
        cb(null, result.css.toString());
      }
    }
  );
};
