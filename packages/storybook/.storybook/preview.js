import React from 'react';
import { ThemeProvider } from 'styled-components';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { GlobalStyle } from '@t3n/components';
import { theme } from '@t3n/theme';

import viewports from './viewports';
import StorybookGlobalStyle from './GlobalStyle';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-dates/lib/css/_datepicker.css';

const parameters = {
  options: {
    storySort: {
      order: ['Storybook', 'Design System', 'Components', 'Legacy'],
    },
  },
  viewport: {
    viewports: {
      ...viewports,
      ...INITIAL_VIEWPORTS,
    },
  },
  controls: { disable: true, expanded: true },
};

const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StorybookGlobalStyle />
        <Story />
      </ThemeProvider>
    );
  },
];

export default { parameters, decorators };
