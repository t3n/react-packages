import { Meta, StoryObj } from '@storybook/react';

import { Input } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Components/Inputs/Input',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    width: 0.5,
    disabled: false,
    error: false,
    isFocused: false,
    defaultChecked: false,
    defaultValue: '',
    type: 'text',
    hideReset: false,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const input: Story = {};

export const disabled: Story = {
  args: { disabled: true },
};

export const error: Story = {
  args: { error: true },
};

export const focused: Story = {
  args: { isFocused: true },
};

export const withValue: Story = {
  args: { defaultValue: 'Wert' },
};

export const withPlaceholder: Story = {
  args: { placeholder: 'Placeholder' },
};

export const withLabel: Story = {
  args: { label: 'Email address' },
};

export const withLabelAndPlaceholder: Story = {
  args: {
    label: 'Email address',
    placeholder: 'name@example.com',
  },
};
