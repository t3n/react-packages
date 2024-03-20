import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Divider, Section } from '@t3n/components';
import { MaterialInfo } from '@t3n/icons';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof Divider> = {
  component: Divider,
  title: 'Components/Layout/Divider',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    width: 1,
    variant: 'primary',
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const divider: Story = {};

export const inverse: Story = {
  args: { variant: 'inverse' },
  decorators: [
    (StoryComp) => (
      <Section variant="inverse">
        <StoryComp />
      </Section>
    ),
    storyContainerContentDecorator,
  ],
};

export const withText: Story = {
  args: {
    children: 'oder',
  },
};

export const withIcon: Story = {
  args: {
    iconComponent: MaterialInfo,
  },
};
