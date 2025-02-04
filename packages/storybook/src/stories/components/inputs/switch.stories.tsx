import React from 'react';
import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';

import { Section, Switch } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: 'Components/Inputs/Switch',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    variant: 'light',
    disabled: false,
    name: 'Switch',
    label: 'Happy?',
  },
  render: function Render(args) {
    const [_, updateArgs] = useArgs<{
      checked: boolean;
    }>();

    return (
      <Switch
        {...args}
        onChange={() => {
          updateArgs({ checked: !args.checked });
        }}
      />
    );
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const iPhoneSwitch: Story = {};

export const disabled: Story = {
  args: { disabled: true },
};

export const checked: Story = {
  args: { checked: true },
};

export const dark: Story = {
  args: { variant: 'dark' },
  decorators: [
    (StoryComp) => {
      return (
        <Section variant="inverse">
          <StoryComp />
        </Section>
      );
    },
  ],
};
