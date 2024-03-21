import { Meta, StoryObj } from '@storybook/react';

import { Content } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof Content> = {
  component: Content,
  title: 'Components/Layout/Content',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    children: 'Hello world!',
    small: false,
    wide: false,
  },
};

export default meta;
type Story = StoryObj<typeof Content>;

export const content: Story = {};

export const small: Story = {
  args: { small: true },
};

export const wide: Story = {
  args: { wide: true },
};
