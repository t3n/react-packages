import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Components/Content/Avatar',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    src: 'https://images.unsplash.com/photo-1565588668820-6f19adba4646?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9',
    label: 'Arabella Lauer',
    size: 40,
    textColor: 'black',
    alt: 'Arabella Lauer',
    loading: false,
    optimizeSrc: true,
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const withLabel: Story = {};

export const loading: Story = {
  args: {
    loading: true,
  },
};

export const noLabel: Story = {
  args: {
    label: '',
  },
};

export const noAvatar: Story = {
  args: {
    src: '',
  },
};
