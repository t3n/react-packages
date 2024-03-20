/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';

import { RadioButton, Section } from '@t3n/components';
import { RadioButtonProps, VariantType } from '@t3n/components/src/RadioButton';
import { ThemeFeedbackColor } from '@t3n/theme/src/theme/colors/colors';

import { storyContainerDecorator } from '../../../utils/decorators';

const meta: Meta<typeof RadioButton> = {
  component: RadioButton as React.FC<RadioButtonProps>,
  title: 'Components/Inputs/RadioButton',
  decorators: [storyContainerDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    variant: 'light' as VariantType,
    name: 'Name Checkbox',
    disabled: false,
    label: 'Label placeholder',
    checked: false,
  },
  render: function Render(args) {
    const [_, updateArgs] = useArgs<{
      checked: boolean;
    }>();

    return (
      <Section variant="primary">
        <RadioButton
          {...args}
          onChange={() => {
            updateArgs({ checked: !args.checked });
          }}
        />
      </Section>
    );
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const radioButton: Story = {};

export const disabled: Story = {
  args: { disabled: true },
};

export const checked: Story = {
  args: { checked: true },
};

export const dark: Story = {
  args: { variant: 'dark' as VariantType },
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

export const withoutLabel: Story = {
  args: { label: '' },
};

export const feedbackColor: Story = {
  args: { feedbackColor: 'error' as ThemeFeedbackColor },
};
