/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */
const WebpackNotifierPlugin = require('webpack-notifier');

// const { NODE_ENV } = process.env;
// const isProd = NODE_ENV === 'production';

module.exports = ({ config }) => {
  config.devtool = 'source-map';

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          forceIsolatedModules: true,
          useCache: true,
          useBabel: true,
          babelCore: '@babel/core',
          reportFiles: ['src/**/*.{ts,tsx}']
        }
      }
    ]
  });

  config.module.rules[0] = {
    ...config.module.rules[0],
    enforce: 'pre',
    use: [...config.module.rules[0].use, { loader: 'source-map-loader' }]
  };

  config.resolve.extensions.push('.ts', '.tsx');
  config.plugins.push(new WebpackNotifierPlugin({ title: 't3n-storybook' }));

  return config;
};
