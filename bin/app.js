#!/usr/bin/env node

const compile = require('../lib/app.js');

compile.dir(process.cwd(), process.cwd() + '/out', function (err, files) {
  if (err) throw err;

  console.log('unadorned - compiling');
});
