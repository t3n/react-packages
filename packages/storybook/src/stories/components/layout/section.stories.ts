import { Meta, StoryObj } from '@storybook/react';

import { Section } from '@t3n/components';

import { secondaryStoryContainerDecorator } from '../../../utils/decorators';

const meta: Meta<typeof Section> = {
  component: Section,
  title: 'Components/Layout/Section',
  decorators: [secondaryStoryContainerDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    innerGap: 6,
    variant: 'primary',
    children: 'Some Content',
    wide: false,
    small: false,
  },
};

export default meta;
type Story = StoryObj<typeof Section>;

export const section: Story = {};
