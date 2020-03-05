const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConf = require('./base');
const { resolvePath } = require('./utils');

module.exports = merge(baseConf, {
  mode: 'development',
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    proxy: {
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath('../index.html'),
      filename: 'index.html',
    }),
  ],
});
