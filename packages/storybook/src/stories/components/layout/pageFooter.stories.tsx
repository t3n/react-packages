import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, FooterLink, PageFooter } from '@t3n/components';

const meta: Meta<typeof PageFooter> = {
  component: PageFooter,
  title: 'Components/Layout/PageFooter',
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    showPrivacySettingsLink: true,
    privacyManagerId: '123456',
  },
};

export default meta;
type Story = StoryObj<typeof PageFooter>;

export const pageFooter: Story = {};

export const extraLinks: Story = {
  args: {
    children: (
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <FooterLink href="#">Testlink #1</FooterLink>
        <FooterLink href="#">Testlink #2</FooterLink>
        <FooterLink href="#">Testlink #3</FooterLink>
        <FooterLink href="#">Testlink #4</FooterLink>
      </Box>
    ),
  },
};
