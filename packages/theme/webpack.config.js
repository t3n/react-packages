/* eslint-disable @typescript-eslint/no-var-requires */
const configure = require('@t3n/configs/webpack');

const config = configure({ title: '@t3n/theme', dirname: __dirname });

config.output.library = {
  root: 't3n-theme',
  commonjs: '@t3n/theme',
  amd: '@t3n/theme',
};

module.exports = {
  ...config,
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'styled-system': {
      commonjs: 'styled-system',
      commonjs2: 'styled-system',
      amd: 'styled-system',
    },
  },
};
