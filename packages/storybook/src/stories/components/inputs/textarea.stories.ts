import { Meta, StoryObj } from '@storybook/react';

import { Textarea } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: 'Components/Inputs/Textarea',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    maxLength: 200,
    width: 1 / 2,
    rows: 4,
    placeholder: '',
    isFocused: false,
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const textarea: Story = {};

export const withPlaceholder: Story = {
  args: { placeholder: 'Placeholder' },
};

export const disabled: Story = {
  args: { disabled: true },
};

export const focused: Story = {
  args: { isFocused: true },
};

export const error: Story = {
  args: { error: true },
};
