# Unadorned

> The simple preprocessor

## What can it compile
- Sass
- Less
- Stylus
- EJS
- Jade/Pug
- Markdown
- Coffeescript
- Typescript

## Usage
### API
```javascript
const unadorned = require('unadorned');

unadorned.dir(__dirname, __dirname + '/compiled', function (err, files) {
  if (err) throw err;

  console.log('compiling');
});
```

## Licence
MIT

