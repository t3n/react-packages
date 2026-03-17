import { Meta, StoryObj } from '@storybook/react';

import { Badge } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Components/Content/Badge',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    variant: 'highlight',
    children: 'ANZEIGE',
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const highlight: Story = {};

export const light: Story = {
  args: {
    variant: 'light',
  },
};

export const inverse: Story = {
  args: {
    variant: 'inverse',
  },
};
