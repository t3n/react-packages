/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const babelConfig = require('../babel');

const { NODE_ENV } = process.env;
const isProd = NODE_ENV === 'production';

module.exports = ({ title = '', dirname = '' }) => {
  const config = {
    entry: ['./src/index.ts'],
    output: {
      filename: 'bundle.js',
      path: resolve(dirname || __dirname, './dist'),
      library: '',
      libraryTarget: 'umd',
      umdNamedDefine: true,
      globalObject: `(typeof self !== 'undefined' ? self : this)`,
    },
    mode: isProd ? 'production' : 'development',
    optimization: {
      nodeEnv: NODE_ENV || (isProd ? 'production' : 'development'),
    },
    context: resolve(dirname || __dirname),
    devtool: 'source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
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
                babelOptions: babelConfig,
                reportFiles: ['src/**/*.{ts,tsx}'],
              },
            },
          ],
        },
        {
          enforce: 'pre',
          exclude: (path) => {
            return !/[\\/]node_modules[\\/]hex-rgb[\\/]/.test(path);
          },
          test: /\.jsx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                ...babelConfig,
                presets: babelConfig.presets.map((preset) => {
                  if (
                    Array.isArray(preset) &&
                    preset[0] === '@babel/preset-env'
                  ) {
                    const presetName = preset[0];
                    const { targets, modules } = preset[1];

                    return [presetName, { targets, modules }];
                  }

                  return preset;
                }),
              },
            },
          ],
        },
        {
          enforce: 'pre',
          exclude: [
            /[\\/]node_modules[\\/](?!(toasted-notes|react-spring|react-imgix|framer-motion)[\\/])/,
            /\.test\.jsx?$/,
          ],
          test: /\.jsx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                ...babelConfig,
              },
            },
            {
              loader: 'source-map-loader',
            },
          ],
        },
      ],
    },
    plugins: [new WebpackNotifierPlugin({ title })],
  };

  if (isProd) {
    config.plugins = [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: './report/report.html',
      }),
      ...config.plugins,
    ];
  }

  return config;
};
