import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, LegacyFooter } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

const meta: Meta<typeof LegacyFooter> = {
  component: LegacyFooter,
  title: 'Legacy/Layout/Footer',
  decorators: [
    (Story) => {
      return (
        <Box width="61.25em">
          <Story />
        </Box>
      );
    },
    storyContainerDecorator,
  ],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    privacyManagerId: '123456',
  },
};

export default meta;
type Story = StoryObj<typeof LegacyFooter>;

export const footer: Story = {};
