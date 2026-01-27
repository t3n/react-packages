import { Meta, StoryObj } from '@storybook/react';

import { Icon } from '@t3n/components';
import { MaterialCheck } from '@t3n/icons';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'Components/Content/Icon',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    component: MaterialCheck,
    fill: 'text.primary',
    width: 24,
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const icon: Story = {};
