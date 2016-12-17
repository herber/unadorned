const os = require('os');
const fs = require('fs');
const path = require('path');

exports.fileName = function (path) {
  let file

  if (os.platform() == 'win32') {
    file = path.split("\\");
  } else {
    file = path.split("/");
  }

  file = file[file.length-1];

  return file.slice(0, file.indexOf('.'));
};

exports.save = function (dir, filename, data) {
  if (!fs.existsSync(dir)) {
    try {
      fs.mkdirSync(dir);
    } catch (e) {
      throw e;
    }
  }

  const file = path.join(dir, filename);

  fs.writeFile(file, data, (err) => {
    if (err) throw err;
  });
};
