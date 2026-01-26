import { Meta, StoryObj } from '@storybook/react';

import { Text } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Components/Typografie/Text',
  decorators: [storyContainerDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    small: false,
    bold: false,
    italic: false,
    align: 'left',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const text: Story = {};

export const small: Story = {
  args: { small: true },
};

export const bold: Story = {
  args: { bold: true },
};

export const italic: Story = {
  args: { italic: true },
};

export const right: Story = {
  args: { align: 'right' },
};

export const center: Story = {
  args: { align: 'center' },
};
