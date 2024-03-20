const webpack = require('webpack');
const path = require('path');
const custom = require('../webpack.config.js');

export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],

  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: { fastRefresh: true },
  },

  staticDirs: ['../public'],

  webpackFinal: async (config) => {
    // Since webpack 5 we need to polyfill some modules
    config.resolve.fallback.crypto = false;
    config.resolve.fallback.buffer = require.resolve('buffer');

    // Alias our own packages so they get included in bundling
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@t3n/components': path.resolve(__dirname, '../../components/src'),
      '@t3n/icons': path.resolve(__dirname, '../../icons/src/components'),
      '@t3n/theme': path.resolve(__dirname, '../../theme/src'),
    };

    config.module = {
      ...config.module,
      ...custom.module,
      rules: [...config.module.rules, ...custom.module.rules],
    };

    // Include our own packages in the loader
    config.module.rules = config.module.rules.map((rule) => {
      if (Array.isArray(rule.oneOf)) {
        return {
          ...rule,
          oneOf: rule.oneOf.map((r) => {
            if (r.test && r.test instanceof RegExp && '.tsx'.match(r.test)) {
              return {
                ...r,
                include: [
                  ...r.include,
                  path.resolve(__dirname, '../../components/src'),
                  path.resolve(__dirname, '../../icons/src'),
                  path.resolve(__dirname, '../../theme/src'),
                ],
              };
            }

            return r;
          }),
        };
      }

      return rule;
    });

    // Add webpack 5 polyfills
    config.plugins = [
      ...config.plugins,
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
    ];

    return config;
  },

  docs: {
    autodocs: true,
  },
};
