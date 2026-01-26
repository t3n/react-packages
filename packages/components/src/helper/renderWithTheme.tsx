import 'jest-styled-components';

import React, { ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { Theme, theme as originalTheme } from '@t3n/theme';

interface OptionalTheme {
  theme?: Theme;
}

export const renderWithTheme = (
  ui: React.ReactElement<any>,
  { theme, ...options }: RenderOptions & OptionalTheme,
) => {
  // merge over default theme

  const mergedTheme = { ...originalTheme, ...theme };

  const Wrapper = ({ children }: { children?: ReactNode }) => (
    <ThemeProvider theme={mergedTheme as any}>{children}</ThemeProvider>
  );

  return render(ui, { wrapper: Wrapper, ...options });
};
