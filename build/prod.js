const merge = require('webpack-merge');
const baseConf = require('./base');

module.exports = merge(baseConf, {
  mode: 'production',
});
