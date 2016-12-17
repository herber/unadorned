const ejs = require('ejs');

exports.build = function (file, cb) {
  ejs.renderFile(file, function(err, result){
    if (err) {
      cb(err, null);
    } else {
      cb(null, result);
    }
  });
};
