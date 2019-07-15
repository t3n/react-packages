import React, { Fragment } from 'react';
import { addDecorator, configure, addParameters } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import { ThemeProvider } from 'styled-components';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { theme } from '@t3n/theme';
import viewports from './viewports';
import GlobalStyle from './GlobalStyle';

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
    <Fragment>
      <GlobalStyle />
      {story()}
    </Fragment>
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
  // Components
  require('../src/stories/components/content/content.stories');
  require('../src/stories/components/section/section.stories');
  require('../src/stories/components/grid/grid.stories');
  require('../src/stories/components/button/button.stories');
  require('../src/stories/components/input/input.stories');
  require('../src/stories/components/inputGroup/inputGroup.stories');
  require('../src/stories/components/card/card.stories');
}

configure(loadStories, module);
