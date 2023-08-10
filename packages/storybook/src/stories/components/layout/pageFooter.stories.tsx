import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import { Box, FooterLink, PageFooter } from '@t3n/components';

export default {
  title: 'Components/Layout/PageFooter',
  component: PageFooter,
};

export const defaultStory = () => (
  <PageFooter
    showPrivacySettingsLink={boolean('Cookies & Tracking anzeigen', false)}
    privacyManagerId="123456"
  />
);

defaultStory.storyName = 'Default';

export const privacyManagerStory = () => (
  <PageFooter
    showPrivacySettingsLink={boolean('Cookies & Tracking anzeigen', true)}
    privacyManagerId="123456"
  />
);

privacyManagerStory.storyName = 'Privacy Manager';

export const footerLinkStory = () => (
  <PageFooter
    showPrivacySettingsLink={boolean('Cookies & Tracking anzeigen', false)}
    privacyManagerId="123456"
  >
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <FooterLink href="#">Testlink #1</FooterLink>
      <FooterLink href="#">Testlink #2</FooterLink>
      <FooterLink href="#">Testlink #3</FooterLink>
      <FooterLink href="#">Testlink #4</FooterLink>
    </Box>
  </PageFooter>
);

footerLinkStory.storyName = 'Footer Link';
