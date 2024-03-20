/* eslint-disable @typescript-eslint/no-var-requires */
const configure = require('@t3n/configs/webpack');

const config = configure({ title: '@t3n/storybook', dirname: __dirname });

config.output.library = {
  root: 't3n-storybook',
  commonjs: '@t3n/storybook',
  amd: '@t3n/storybook',
};

module.exports = {
  ...config,
};
