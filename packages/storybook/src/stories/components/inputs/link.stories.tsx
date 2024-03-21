import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Link, Section } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof Link> = {
  component: Link,
  title: 'Components/Inputs/Link',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    linkVariant: 'primary',
    disabled: false,
    small: false,
    variant: 'primary',
    children: 'Test-Link',
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const link: Story = {};

export const disabled: Story = {
  args: { disabled: true },
};

export const small: Story = {
  args: { small: true },
};

export const highlight: Story = {
  args: { linkVariant: 'highlight', variant: 'highlight' },
  decorators: [
    (StoryComp) => {
      return (
        <Section variant="highlight">
          <StoryComp />
        </Section>
      );
    },
  ],
};

export const inverse: Story = {
  args: { linkVariant: 'inverse', variant: 'inverse' },
  decorators: [
    (StoryComp) => {
      return (
        <Section variant="inverse">
          <StoryComp />
        </Section>
      );
    },
  ],
};
