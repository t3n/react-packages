import { Meta, StoryObj } from '@storybook/react';

import { Ratio } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof Ratio> = {
  component: Ratio,
  title: 'Components/Layout/Ratio',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    ratio: 16 / 9,
    bg: 'background.secondary',
  },
};

export default meta;
type Story = StoryObj<typeof Ratio>;

export const ratio: Story = {};
