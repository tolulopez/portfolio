const path = require('path');

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/public/js',
    filename: 'script.js'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"] },
    ]
  }
}
