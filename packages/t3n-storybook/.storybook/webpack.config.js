const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = ({ config }) => {
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

  config.resolve.extensions.push('.ts', '.tsx');
  config.plugins.push(new WebpackNotifierPlugin({ title: 't3n-storybook' }));

  return config;
};
