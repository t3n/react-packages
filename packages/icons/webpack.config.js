/* eslint-disable @typescript-eslint/no-var-requires */
const configure = require('@t3n/configs/webpack');

module.exports = {
  ...configure({ title: '@t3n/icons', dirname: __dirname }),
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
