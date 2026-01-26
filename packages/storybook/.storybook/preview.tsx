import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { ComponentsConfigurationProvider, GlobalStyle } from '@t3n/components';
import { theme } from '@t3n/theme';

import StorybookGlobalStyle from './GlobalStyle';
import viewports from './viewports';

const preview: Preview = {
  parameters: {
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
  },
  decorators: [
    (Story) => {
      return (
        <ComponentsConfigurationProvider
          configuration={{
            cdn: {
              hostname: 'cdn.t3n.de',
              originHostnames: [
                'storage.googleapis.com',
                'images.t3n.de',
                'assets.t3n.de',
              ],
            },
          }}
        >
          <ThemeProvider theme={theme}>
            <GlobalStyle theme={theme} />
            <StorybookGlobalStyle />
            <Story />
          </ThemeProvider>
        </ComponentsConfigurationProvider>
      );
    },
  ],
};

export default preview;
