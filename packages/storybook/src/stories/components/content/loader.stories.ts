import { Meta, StoryObj } from '@storybook/react';

import { Loader } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: 'Components/Content/Loader',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    small: false,
    color: 'background.inverse',
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const loader: Story = {};

export const smallLoader: Story = {
  args: { small: true },
};
