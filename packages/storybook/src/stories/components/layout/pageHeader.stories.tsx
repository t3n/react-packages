import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { PageHeader, UserMenu } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

const meta: Meta<typeof PageHeader> = {
  component: PageHeader,
  title: 'Components/Layout/PageHeader',
  parameters: { controls: { sort: 'requiredFirst' } },
  decorators: [storyContainerDecorator],
  args: {
    transparent: false,
    light: false,
    logoHref: 'https://t3n.de',
  },
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const pageHeader: Story = {};

export const withUserMenu: Story = {
  args: {
    children: (
      <UserMenu
        light={false}
        isProMember={false}
        userEmail="john.doe@beispiel.de"
      />
    ),
  },
};
