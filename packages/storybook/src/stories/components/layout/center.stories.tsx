import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, Center } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

const meta: Meta<typeof Center> = {
  component: Center,
  title: 'Components/Layout/Center',
  decorators: [storyContainerDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    children: (
      <Box width={1 / 2} height="200px" p={3} bg="background.secondary">
        Zentrierte Box
      </Box>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Center>;

export const center: Story = {};
