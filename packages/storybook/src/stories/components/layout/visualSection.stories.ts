import { Meta, StoryObj } from '@storybook/react';

import { VisualSection } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

const meta: Meta<typeof VisualSection> = {
  component: VisualSection,
  title: 'Components/Layout/VisualSection',
  decorators: [storyContainerDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    innerGap: 6,
    variant: 'highlight',
    children: 'Some Content',
    wide: false,
  },
};

export default meta;
type Story = StoryObj<typeof VisualSection>;

export const visualSection: Story = {};
