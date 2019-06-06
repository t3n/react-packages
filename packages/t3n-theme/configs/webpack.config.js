/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: './index.ts',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '../dist'),
    library: '',
    libraryTarget: 'commonjs'
  },
  mode: 'production',
  context: resolve(__dirname, '../src'),
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/, /\.test\.tsx?$/],
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              forceIsolatedModules: true,
              useCache: true,
              useBabel: true,
              babelCore: '@babel/core',
              reportFiles: ['src/**/*.ts']
            }
          }
        ]
      }
    ]
  },
  plugins: [new WebpackNotifierPlugin({ title: 't3n-theme' })]
};
