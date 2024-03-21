import React from 'react';
import { Story } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';

import { IconButton, Section } from '@t3n/components';
import { MaterialCheck } from '@t3n/icons';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: 'Components/Inputs/IconButton',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    icon: MaterialCheck,
    label: 'Speichern',
    size: 'regular',
    variant: 'primary',
    color: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const iconButton: Story = {};

export const expanded: Story = {
  args: { expanded: true },
};

export const loading: Story = {
  args: { loading: true },
};

export const secondary: Story = {
  args: { variant: 'secondary' },
};

export const small: Story = {
  args: { size: 'small' },
};

export const big: Story = {
  args: { size: 'big' },
};

export const highlight: Story = {
  args: { color: 'highlight' },
  decorators: [
    (StoryComp) => {
      return (
        <Section variant="highlight">
          <StoryComp />
        </Section>
      );
    },
    storyContainerContentDecorator,
  ],
};

export const inverse: Story = {
  args: { color: 'inverse' },
  decorators: [
    (StoryComp) => {
      return (
        <Section variant="inverse">
          <StoryComp />
        </Section>
      );
    },
    storyContainerContentDecorator,
  ],
};
