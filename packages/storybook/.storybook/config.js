import React from 'react';
import { addDecorator, configure, addParameters } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import { ThemeProvider } from 'styled-components';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';

import { GlobalStyle } from '@t3n/components';
import { theme } from '@t3n/theme';

import viewports from './viewports';
import StorybookGlobalStyle from './GlobalStyle';

import storyBookTheme from './theme';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri:
      process.env.NODE_ENV === 'production'
        ? 'https://api.t3n.de'
        : 'https://api.stage.t3n.de',
    credentials: 'include'
  })
});

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
      <StorybookGlobalStyle />
      {story()}
    </ApolloProvider>
  </ThemeProvider>
));

function loadStories() {
  // Storybook
  // require('../src/stories/storybook/storybook.stories');

  // Design-System
  require('../src/stories/designSystem/breakpoints/breakpoints.stories');
  require('../src/stories/designSystem/colors/colors.stories');
  require('../src/stories/designSystem/space/space.stories');
  require('../src/stories/designSystem/theme/theme.stories');

  // Components - Typography
  require('../src/stories/components/typography/heading/heading.stories');
  require('../src/stories/components/typography/text/text.stories');
  require('../src/stories/components/typography/punchline/punchline.stories');

  // Components - Layout
  require('../src/stories/components/layout/globalStyle.stories');
  require('../src/stories/components/layout/content.stories');
  require('../src/stories/components/layout/center.stories');
  require('../src/stories/components/layout/divider.stories');
  require('../src/stories/components/layout/grid.stories');
  require('../src/stories/components/layout/pageLayout.stories');
  require('../src/stories/components/layout/pageHeader.stories');
  require('../src/stories/components/layout/pageFooter.stories');
  require('../src/stories/components/layout/ratio.stories');
  require('../src/stories/components/layout/section.stories');

  // Components - Content
  require('../src/stories/components/content/authorArticleCard.stories');
  require('../src/stories/components/content/avatar.stories');
  require('../src/stories/components/content/badge.stories');
  require('../src/stories/components/content/card.stories');
  require('../src/stories/components/content/heroArticleCard.stories');
  require('../src/stories/components/content/image.stories');
  require('../src/stories/components/content/newsCard.stories');
  require('../src/stories/components/content/jobCard.stories');
  require('../src/stories/components/content/titleCard.stories');
  require('../src/stories/components/content/loader.stories');
  require('../src/stories/components/content/placeholder.stories');

  // Components - Inputs
  require('../src/stories/components/inputs/button.stories');
  require('../src/stories/components/inputs/input.stories');
  require('../src/stories/components/inputs/checkbox.stories');
  require('../src/stories/components/inputs/link.stories');

  // Form
  require('../src/stories/components/form/form.stories');

  // SSO
  require('../src/stories/projects/sso/login.stories');
  require('../src/stories/projects/sso/onboarding.stories');
}

configure(loadStories, module);
