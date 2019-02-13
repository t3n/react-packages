import React, { Fragment } from 'react';
import { addDecorator, configure, setAddon } from '@storybook/react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { checkA11y } from '@storybook/addon-a11y';
import {
  configureViewport,
  INITIAL_VIEWPORTS
} from '@storybook/addon-viewport';
import { withOptions } from '@storybook/addon-options';
import JSXAddon from 'storybook-addon-jsx';
import { theme } from '@t3n/styles';
import viewports from '../src/utils/viewports';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fonts.default};
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

configureViewport({
  viewports: {
    ...viewports,
    ...INITIAL_VIEWPORTS
  },
  defaultViewport: 'responsive'
});

addDecorator(
  withOptions({
    name: 't3n Storybook',
    hierarchyRootSeparator: /\|/
  })
);

addDecorator(checkA11y);
addDecorator(story => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      {story()}
    </Fragment>
  </ThemeProvider>
));

setAddon(JSXAddon);

const req = require.context('../src/stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
