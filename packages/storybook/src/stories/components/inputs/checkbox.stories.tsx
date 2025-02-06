import React from 'react';
import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';

import { Checkbox, Section } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Components/Inputs/Checkbox',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    label: 'Checkbox',
    name: 'checkbox',
    disabled: false,
    checked: false,
    variant: 'light',
  },
  render: function Render(args) {
    const [_, updateArgs] = useArgs<{
      checked: boolean;
    }>();

    return (
      <Checkbox
        {...args}
        onChange={() => {
          updateArgs({ checked: !args.checked });
        }}
      />
    );
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const checkbox: Story = {};

export const disabled: Story = {
  args: { disabled: true },
};

export const checked: Story = {
  args: { checked: true },
};

export const dark: Story = {
  args: { variant: 'dark' },
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

export const withoutLabel: Story = {
  args: { label: '' },
};

export const withFeedbackColor: Story = {
  args: { feedbackColor: 'error' },
};
