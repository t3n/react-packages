import { Meta, StoryObj } from '@storybook/react';

import { LegacySection } from '@t3n/components';

import { secondaryStoryContainerDecorator } from '../../../utils/decorators';

const meta: Meta<typeof LegacySection> = {
  component: LegacySection,
  title: 'Legacy/Layout/Section',
  decorators: [secondaryStoryContainerDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    narrow: false,
    variant: 'primary',
    wide: false,
    children: 'Hallo Welt',
  },
};

export default meta;
type Story = StoryObj<typeof LegacySection>;

export const section: Story = {};

export const narrowSection: Story = {
  args: {
    narrow: true,
  },
};

export const wideSection: Story = {
  args: {
    wide: true,
  },
};

export const secondarySection: Story = {
  args: {
    variant: 'secondary',
  },
};
