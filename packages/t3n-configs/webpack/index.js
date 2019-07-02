/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { NODE_ENV } = process.env;
const isProd = NODE_ENV === 'production';

module.exports = ({ title = '', dirname = '' }) => {
  const config = {
    entry: './src/index.ts',
    output: {
      filename: 'bundle.js',
      path: resolve(dirname || __dirname, './dist'),
      library: '',
      libraryTarget: 'commonjs'
    },
    mode: isProd ? 'production' : 'development',
    optimization: {
      nodeEnv: NODE_ENV || (isProd ? 'production' : 'development')
    },
    context: resolve(dirname || __dirname),
    devtool: isProd ? 'source-map' : 'eval-source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: [/node_modules/, /\.test\.tsx?$/],
          use: [
            {
              loader: 'awesome-typescript-loader',
              options: {
                forceIsolatedModules: true,
                useCache: true,
                useBabel: true,
                babelCore: '@babel/core',
                reportFiles: ['src/**/*.{ts,tsx}']
              }
            }
          ]
        },
        {
          enforce: 'pre',
          exclude: [/node_modules/, /\.test\.jsx?$/],
          test: /\.jsx?$/,
          loaders: ['babel-loader', 'source-map-loader']
        }
      ]
    },
    plugins: [new WebpackNotifierPlugin({ title })]
  };

  if (isProd) {
    config.plugins = [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false
      }),
      ...config.plugins
    ];
  }

  return config;
};
