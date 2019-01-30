import React, { Fragment } from 'react';
import { addDecorator, configure, setAddon } from '@storybook/react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { checkA11y } from '@storybook/addon-a11y';
import {
  configureViewport,
  INITIAL_VIEWPORTS
} from '@storybook/addon-viewport';
import JSXAddon from 'storybook-addon-jsx';

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

configureViewport({
  viewports: INITIAL_VIEWPORTS
});

setAddon(JSXAddon);

addDecorator(checkA11y);
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
