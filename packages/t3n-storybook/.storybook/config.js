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

import storyBookTheme from './theme';

const client = new ApolloClient({ uri: 'https://api.t3n.de' });

addParameters({
  options: {
    panelPosition: 'right',
    theme: storyBookTheme
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

  // VisualIdentity
  require('../src/stories/visualIdentity/logo/logo.stories');
  require('../src/stories/visualIdentity/colors/colors.stories');
  require('../src/stories/visualIdentity/typography/introduction/introduction.stories');
  require('../src/stories/visualIdentity/typography/fonts/fonts.stories');
  require('../src/stories/visualIdentity/typography/heading/heading.stories');
  require('../src/stories/visualIdentity/typography/text/text.stories');
  require('../src/stories/visualIdentity/icons/icons.stories');

  // Layout
  require('../src/stories/layout/breakpoints/breakpoints.stories');

  // Components - Layout
  require('../src/stories/components/layout/page.stories');
  require('../src/stories/components/layout/content.stories');
  require('../src/stories/components/layout/grid.stories');
  require('../src/stories/components/layout/section.stories');
  require('../src/stories/components/layout/avatar.stories');
  require('../src/stories/components/layout/image.stories');

  // Components - Inputs
  require('../src/stories/components/inputs/button.stories');
  require('../src/stories/components/inputs/input.stories');

  // Form
  require('../src/stories/components/form/form.stories');

  // Components - Content
  require('../src/stories/components/content/badge.stories');
  require('../src/stories/components/content/card.stories');
  require('../src/stories/components/content/articleCard.stories');
  require('../src/stories/components/content/loadingIndicator.stories');

  // SSO
  require('../src/stories/projects/sso/onboarding.stories');

  // t3nPro
  require('../src/stories/projects/t3nPro/landingpage.stories');
}

configure(loadStories, module);
