import React, { Fragment } from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { configure } from '@storybook/react';

import * as theme from '@t3n/styles';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Adelle-sans';
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      {story()}
    </Fragment>
  </ThemeProvider>
));

const req = require.context('../src/stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
