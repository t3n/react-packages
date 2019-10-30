/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */
const WebpackNotifierPlugin = require('webpack-notifier');

const { NODE_ENV } = process.env;
const isProd = NODE_ENV === 'production';

module.exports = ({ config }) => {
  config.devtool = isProd ? 'source-map' : 'inline-source-map';

  // config.module.rules[0] = {
  //   ...config.module.rules[0],
  //   enforce: 'pre',
  //   use: [...config.module.rules[0].use, { loader: 'source-map-loader' }]
  // };

  config.plugins.push(new WebpackNotifierPlugin({ title: '@t3n/storybook' }));

  return config;
};
