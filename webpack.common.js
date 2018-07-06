const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/app.ts'],
  resolve:
    {
      extensions: ['.ts', '.js', '.json']
    },
};
