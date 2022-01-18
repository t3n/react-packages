import React from 'react';

import { Box, FooterLink, PageFooter } from '@t3n/components';

export default {
  title: 'Components/Layout/PageFooter',
  component: PageFooter,
};

export const defaultStory = () => <PageFooter contactLink="mailto:hi@t3n.de" />;

defaultStory.storyName = 'Default';

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

footerLinkStory.storyName = 'Footer Link';
