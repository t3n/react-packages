import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, Punchline, VisualSection } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof Punchline> = {
  component: Punchline,
  title: 'Components/Typografie/Punchline',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    children: 'Ich bin eine Punchline!',
  },
};

export default meta;
type Story = StoryObj<typeof Punchline>;

export const punchline: Story = {};

export const lineBreak: Story = {
  decorators: [
    (StoryComp) => {
      return (
        <Box width="500px">
          <StoryComp />
        </Box>
      );
    },
    storyContainerContentDecorator,
  ],
};

export const inVisualSection: Story = {
  decorators: [
    (StoryComp) => {
      return (
        <VisualSection variant="highlight" innerGap={9}>
          <StoryComp />
        </VisualSection>
      );
    },
    storyContainerContentDecorator,
  ],
};
