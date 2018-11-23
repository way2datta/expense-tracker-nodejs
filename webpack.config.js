const path = require('path');

module.exports = {
  entry: './src/frontend/App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/preset-react']
        }
      }
    ]
  }
};