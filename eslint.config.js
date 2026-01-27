import { defineConfig, globalIgnores } from 'eslint/config';

import baseConfig from '@t3n/eslint-config';
import reactConfig from '@t3n/eslint-config-react';
import typescriptConfig from '@t3n/eslint-config-typescript';

export default defineConfig([
  baseConfig,
  reactConfig,
  typescriptConfig,
  globalIgnores([
    '**/*.d.ts',
    '!./packages/components/src/types.d.ts',
    '**/build/',
    '**/dist/',
    './packages/icons/src/components/**/*',
    '**/*.test.tsx.snap',
  ]),
]);
