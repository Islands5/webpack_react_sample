const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'app');
const JS_DIR = path.resolve(__dirname, 'src/react');

module.exports = {
  entry: `${JS_DIR}/main.jsx`,
  output: {
    path: `${APP_DIR}/javascripts`,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: JS_DIR,
        loader: 'babel-loader'
      }
    ]
  },
};
