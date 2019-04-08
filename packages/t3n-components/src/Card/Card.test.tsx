import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from 'react-testing-library';
import { ThemeProvider } from 'styled-components';

import Card from './Card';

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

describe('Card component', () => {
  afterEach(cleanup);

  it('renders', () => {
    const text = 'This is the content';
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Card>{text}</Card>
      </ThemeProvider>
    );
    expect(getByText(text)).toBeTruthy();
  });
});
