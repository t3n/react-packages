import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, PageHeader, UserMenu } from '@t3n/components';
import { UserMenuProps } from '@t3n/components/src/UserMenu';

import { storyContainerDecorator } from '../../../utils/decorators';

const links: UserMenuProps['items'] = [
  <a href="/">
    Eine
    <span role="img" aria-label="Sonnenblume">
      🌻
    </span>
    Blume
  </a>,
  <a href="https://faq.t3n.de/">FAQ</a>,
];

const meta: Meta<typeof UserMenu> = {
  component: UserMenu,
  title: 'Components/Content/UserMenu',
  decorators: [
    (Story) => {
      return (
        <Box height="25vh">
          <PageHeader>
            <Story />
          </PageHeader>
        </Box>
      );
    },
    storyContainerDecorator,
  ],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    light: false,
    isPlusUser: false,
    isProMember: false,
    active: false,
    userEmail: 'john.doe@beispiel.de',
  },
};

export default meta;
type Story = StoryObj<typeof UserMenu>;

export const userMenu: Story = {};

export const active: Story = {
  args: { active: true },
};

export const light: Story = {
  args: { light: true },
  decorators: [
    (StoryComp) => {
      return (
        <Box height="25vh">
          <PageHeader light>
            <StoryComp />
          </PageHeader>
        </Box>
      );
    },
    storyContainerDecorator,
  ],
};

export const notLoggedIn: Story = {
  args: { userEmail: undefined },
};

export const extraContent: Story = {
  args: { items: links },
};
