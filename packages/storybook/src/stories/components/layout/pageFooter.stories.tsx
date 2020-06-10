import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { PageFooter, Box, FooterLink } from '@t3n/components';

export default {
  title: 'Components|Layout/PageFooter',
  component: PageFooter,
  decorators: [withKnobs],
};

export const defaultStory = () => <PageFooter contactLink="mailto:hi@t3n.de" />;

defaultStory.story = {
  name: 'Default',
};

export const footerLinkStory = () => (
  <PageFooter contactLink="mailto:hi@t3n.de">
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <FooterLink href="#">Testlink #1</FooterLink>
      <FooterLink href="#">Testlink #2</FooterLink>
      <FooterLink href="#">Testlink #3</FooterLink>
      <FooterLink href="#">Testlink #4</FooterLink>
    </Box>
  </PageFooter>
);

footerLinkStory.story = {
  name: 'Footer Link',
};
