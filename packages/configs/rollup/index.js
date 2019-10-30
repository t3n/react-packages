import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import babel from 'rollup-plugin-babel';

const createConfig = ({ title = '', dirname = '' }) => {
  const config = {
    input: `${dirname}/src/index.ts`,
    output: {
      file: `${dirname}/dist/bundle.js`,
      format: 'cjs'
    },
    plugins: [
      resolve(),
      typescript({
        exlude: ['**/*.test.ts', '**/*.test.tsx']
      }),
      babel({
        exclude: 'node_modules/**'
      })
    ]
  };

  return config;
};

export default createConfig;
