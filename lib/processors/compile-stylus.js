const stylus = require('stylus');
const fs = require('fs');

exports.build = function (file, cb) {
  fs.readFile(file, (err, data) => {
    if (err) {
      return cb(err, null);
    } else {
      var style = stylus(data.toString())
        style.set('filename', file)
        style.set('compress', true)

      style.render(function(err, result){
          if(err){
            return cb(err, null);
          } else {
            cb(null, result.toString());
          }
      });
    }
  });
};
