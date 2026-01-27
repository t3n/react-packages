import 'jest-styled-components';

import React, { PropsWithChildren, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { Theme, theme as originalTheme } from '@t3n/theme';

interface OptionalTheme {
  theme?: Theme;
}

export const renderWithTheme = (
  ui: ReactElement,
  { theme, ...options }: RenderOptions & OptionalTheme,
) => {
  // merge over default theme

  const mergedTheme = { ...originalTheme, ...theme };

  const Wrapper = ({ children }: PropsWithChildren) => (
    <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>
  );

  return render(ui, { wrapper: Wrapper, ...options });
};
