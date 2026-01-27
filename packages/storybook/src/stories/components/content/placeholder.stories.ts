import { Meta, StoryObj } from '@storybook/react';

import { Placeholder } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof Placeholder> = {
  component: Placeholder,
  title: 'Components/Content/Placeholder',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    height: '2rem',
    p: 3,
  },
};

export default meta;
type Story = StoryObj<typeof Placeholder>;

export const placeholder: Story = {};
