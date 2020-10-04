const config = require('./webpack.common');

module.exports = {
  mode: 'production',
  ...config(),
};
