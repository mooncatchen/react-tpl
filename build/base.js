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
      '@/': resolvePath('../src/'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'ts-loader',
      },
    ],
  },
};
