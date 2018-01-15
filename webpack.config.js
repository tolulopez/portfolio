const path = require('path');

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/public/js',
    filename: 'script.js',
    publicPath: path.resolve(__dirname, '/public/')
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"] },
    ]
  }
}
