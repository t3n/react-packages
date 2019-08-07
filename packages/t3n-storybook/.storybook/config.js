import { AlignItemsProps } from 'styled-system';
import React, { Fragment } from 'react';
import { addDecorator, configure, addParameters } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import { ThemeProvider } from 'styled-components';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { theme } from '@t3n/theme';
import viewports from './viewports';
import GlobalStyle from './GlobalStyle';

const client = new ApolloClient({ uri: 'https://api.t3n.de' });

addParameters({
  options: {
    panelPosition: 'right'
  },
  viewport: {
    viewports: {
      ...viewports,
      ...INITIAL_VIEWPORTS
    },
    defaultViewport: 'responsive'
  }
});

addDecorator(addReadme);
addDecorator(withA11y);
addDecorator(story => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <GlobalStyle />
      {story()}
    </ApolloProvider>
  </ThemeProvider>
));

function loadStories() {
  // Storybook
  require('../src/stories/storybook/storybook.stories');
  // Brand
  require('../src/stories/brand/brand.stories');
  // Style
  require('../src/stories/style/logo/logo.stories');
  require('../src/stories/style/colors/colors.stories');
  require('../src/stories/style/typography/introduction/introduction.stories');
  require('../src/stories/style/typography/fonts/fonts.stories');
  require('../src/stories/style/typography/heading/heading.stories');
  require('../src/stories/style/typography/text/text.stories');
  require('../src/stories/style/icons/icons.stories');
  // Design System
  require('../src/stories/system/breakpoints/breakpoints.stories');

  /**
   * Components
   */

  // Layout-Components
  require('../src/stories/components/page/header.stories');
  require('../src/stories/components/page/layout.stories');

  require('../src/stories/components/section/section.stories');
  require('../src/stories/components/grid/grid.stories');

  // Content-Components
  require('../src/stories/components/content/content.stories');

  require('../src/stories/components/button/button.stories');
  require('../src/stories/components/card/card.stories');
  require('../src/stories/components/card/newsCard.stories');

  require('../src/stories/components/input/input.stories');
  require('../src/stories/components/inputGroup/inputGroup.stories');

  /**
   * Projects
   */

  // t3nPro
  require('../src/stories/projects/t3nPro/onboarding.stories');
  require('../src/stories/projects/t3nPro/landingpage.stories');
}

configure(loadStories, module);
