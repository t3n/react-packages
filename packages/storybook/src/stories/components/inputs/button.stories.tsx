import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, Section } from '@t3n/components';
import {
  ButtonColorVariant,
  ButtonSizeVariant,
  ButtonVariant,
} from '@t3n/components/src/Button';
import { MaterialCheck } from '@t3n/icons';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Inputs/Button',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    loading: false,
    disabled: false,
    variant: 'primary' as ButtonVariant,
    size: 'regular' as ButtonSizeVariant,
    color: 'default' as ButtonColorVariant,
    children: 'Klick mich',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const button: Story = {};

export const small: Story = {
  args: { size: 'small' as ButtonSizeVariant },
};

export const big: Story = {
  args: { size: 'big' as ButtonSizeVariant },
};

export const secondary: Story = {
  args: { variant: 'secondary' as ButtonVariant },
};

export const inverse: Story = {
  args: { color: 'inverse' as ButtonColorVariant },
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

export const secondaryInverse: Story = {
  args: {
    variant: 'secondary' as ButtonVariant,
    color: 'inverse' as ButtonColorVariant,
  },
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

export const highlight: Story = {
  args: { color: 'highlight' as ButtonColorVariant },
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

export const secondaryHighlight: Story = {
  args: {
    variant: 'secondary' as ButtonVariant,
    color: 'highlight' as ButtonColorVariant,
  },
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

export const loading: Story = {
  args: { loading: true },
};

export const disabled: Story = {
  args: { disabled: true },
};

export const iconLeft: Story = {
  args: { iconLeft: MaterialCheck },
};

export const iconRight: Story = {
  args: { iconRight: MaterialCheck },
};
