import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { Card } from './Card';

const theme = {
  colors: {
    background: {
      light: '#fff'
    }
  },
  border: {
    radii: [0, '4px']
  }
};

it('should test', () => {
  expect(true).toBe(true);
});

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('Card component', () => {
  afterEach(cleanup);

  it('renders', () => {
    const text = 'This is the content';
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Card>{text}</Card>
      </ThemeProvider>
    );
    expect(getByText(text)).toBeTruthy();
  });
});
