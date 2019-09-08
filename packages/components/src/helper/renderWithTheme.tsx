import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Theme, theme as originalTheme } from '@t3n/theme';
import 'jest-styled-components';

interface OptionalTheme {
  theme?: Theme;
}

export const renderWithTheme = (
  ui: React.ReactElement,
  { theme, ...options }: RenderOptions & OptionalTheme
) => {
  // merge over default theme

  const mergedTheme = { ...originalTheme, ...theme };

  const Wrapper: React.FC = ({ children }) => (
    <ThemeProvider theme={mergedTheme}>
      <>{children}</>
    </ThemeProvider>
  );

  return render(ui, { wrapper: Wrapper, ...options });
};
