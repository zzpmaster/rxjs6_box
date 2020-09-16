const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/index.ts'],
  resolve:
    {
      extensions: ['.ts', '.js', '.json']
    },
};
