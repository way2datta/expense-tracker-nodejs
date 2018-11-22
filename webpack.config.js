const path = require('path');

module.exports = {
  entry: './src/frontend/admin-app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};