module.exports = {
  plugins: ['polished', 'styled-components', '@babel/plugin-transform-runtime'],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: '>0.25%, not op_mini all',
        modules: false,
        useBuiltIns: 'usage',
        corejs: 3
      }
    ],
    '@babel/preset-react'
  ]
};
