import { Meta, StoryObj } from '@storybook/react';

import { LegacySocialBar } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof LegacySocialBar> = {
  component: LegacySocialBar,
  title: 'Legacy/Content/SocialBar',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    isInFooter: false,
  },
};

export default meta;
type Story = StoryObj<typeof LegacySocialBar>;

export const legacySocialBar: Story = {};

export const inFooter: Story = {
  args: { isInFooter: true },
};
