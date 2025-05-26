import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, PageFooter } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

const meta: Meta<typeof PageFooter> = {
  component: PageFooter,
  title: 'Components/Layout/Footer',
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
type Story = StoryObj<typeof PageFooter>;

export const footer: Story = {};
