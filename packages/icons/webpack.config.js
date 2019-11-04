/* eslint-disable @typescript-eslint/no-var-requires */
const configure = require('@t3n/configs/webpack');

const config = configure({ title: '@t3n/icons', dirname: __dirname });

config.output.library = 't3n-icons';

module.exports = {
  ...config,
  entry: './src/components/index.ts',
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }
};
