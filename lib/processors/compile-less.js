const less = require('less');
const fs = require('fs');

exports.build = function (file, cb) {
  fs.readFile(file, (err, data) => {
    if (err) {
      return cb(err, null);
    } else {
      less.render(data.toString(), {
        filename: file,
        compress: true,
      }, function(err, result){
        if (err) {
          return cb(err, null);
        } else {
          cb(null, result.css.toString());
        }
      })
    }
  });
};
