// eslint-disable-next-line @typescript-eslint/no-require-imports
const testsConfig = require('./tests');

const config = {
  plugins: ['polished', 'styled-components', '@babel/plugin-transform-runtime'],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: '>0.25%, not op_mini all',
        modules: false,
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-react',
  ],
};

module.exports = process.env.NODE_ENV === 'test' ? testsConfig : config;
