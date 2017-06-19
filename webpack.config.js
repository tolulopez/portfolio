const path = require('path');
module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/public/js',
    filename: 'script.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
