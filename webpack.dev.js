const path = require('path');
const config = require('./webpack.common');

console.log('dev');

module.exports = {
  ...config(),
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
  }
};
