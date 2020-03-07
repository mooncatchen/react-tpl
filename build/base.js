const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolvePath } = require('./utils');

module.exports = {
  entry: {
    app: resolvePath('../src/app.tsx'),
  },
  output: {
    filename: '[name].[hash].js',
    path: resolvePath('../dist'),
  },
  resolve: {
    alias: {
      '@': resolvePath('../src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.(le|c)ss$/,
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
  ],
};
