const pug = require('pug');

exports.build = function (file, cb) {
  try {
    const result = pug.renderFile(file);
    cb(null, result);
  } catch (e) {
    cb(e, null);
  }
};
