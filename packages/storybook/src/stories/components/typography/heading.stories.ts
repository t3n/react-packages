import { Meta, StoryObj } from '@storybook/react';

import { Heading } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: 'Components/Typografie/Heading',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    as: 'h1',
    styleAs: 'h1',
    color: 'text.primary',
    align: 'left',
    children:
      'Private Cloud: Worauf du achten solltest, wenn du dich auf Anbietersuche begibst!',
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const h1: Story = {};

export const h2: Story = {
  args: { as: 'h2', styleAs: 'h2' },
};

export const h3: Story = {
  args: { as: 'h3', styleAs: 'h3' },
};

export const h4: Story = {
  args: { as: 'h4', styleAs: 'h4' },
};

export const h5: Story = {
  args: { as: 'h5', styleAs: 'h5' },
};

export const h6: Story = {
  args: { as: 'h6', styleAs: 'h6' },
};
