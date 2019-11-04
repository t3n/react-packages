/* eslint-disable @typescript-eslint/no-var-requires */
const configure = require('@t3n/configs/webpack');

const config = configure({ title: '@t3n/components', dirname: __dirname });

config.output.library = {
  root: 't3n-components',
  commonjs: '@t3n/components',
  amd: '@t3n/components'
};

module.exports = {
  ...config,
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom'
    },
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components'
    },
    'styled-system': {
      commonjs: 'styled-system',
      commonjs2: 'styled-system',
      amd: 'styled-system'
    },
    '@t3n/icons': {
      root: 't3n-icons',
      commonjs2: '@t3n/icons',
      commonjs: '@t3n/icons',
      amd: '@t3n/icons',
      umd: '@t3n/icons'
    },
    '@t3n/theme': {
      root: 't3n-theme',
      commonjs2: '@t3n/theme',
      commonjs: '@t3n/theme',
      amd: '@t3n/theme',
      umd: '@t3n/theme'
    }
  }
};
