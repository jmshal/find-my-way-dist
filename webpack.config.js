const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
  resolve: {
    alias: {
      'assert$': path.resolve(__dirname, 'src', 'assert.js'),
      'http$': path.resolve(__dirname, 'src', 'http.js'),
    },
  },
};