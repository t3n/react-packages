import React from 'react';
import { ThemeProvider } from 'styled-components';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';

import { GlobalStyle } from '@t3n/components';
import { theme } from '@t3n/theme';

import viewports from './viewports';
import StorybookGlobalStyle from './GlobalStyle';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-dates/lib/css/_datepicker.css';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri:
      process.env.NODE_ENV === 'production'
        ? 'https://api.t3n.de'
        : 'https://api.stage.t3n.de',
    credentials: 'include',
  }),
});

export const parameters = {
  viewport: {
    viewports: {
      ...viewports,
      ...INITIAL_VIEWPORTS,
    },
  },
  controls: { expanded: true },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <StorybookGlobalStyle />
        <Story />
      </ApolloProvider>
    </ThemeProvider>
  ),
];
