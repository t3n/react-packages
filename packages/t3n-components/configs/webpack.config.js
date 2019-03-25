const { resolve } = require('path');

module.exports = {
  entry: './index.ts',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '../build')
  },
  mode: 'production',
  context: resolve(__dirname, '../src'),
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        enforce: 'pre',
        exclude: /node_modules/,
        test: /\.jsx?$/,
        use: ['babel-loader', 'source-map-loader']
      }
    ]
  }
};
