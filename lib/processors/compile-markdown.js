const markdown = require('markdown').markdown;
const fs = require('fs');
const { fileName } = require('../helpers');

exports.build = function (file, cb) {
  fs.readFile(file, (err, data) => {
    if (err) {
      return cb(err, null);
    } else {
      const compiled = markdown.toHTML(data.toString());
      const result = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' + fileName(file) + '</title></head><body>' + compiled + '</body></html>';
      cb(null, result);
    }
  });
};
