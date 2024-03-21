import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, LegacyBreadcrumb, LegacyBreadcrumbItem } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

const meta: Meta<typeof LegacyBreadcrumb> = {
  component: LegacyBreadcrumb,
  title: 'Legacy/Layout/Breadcrumb',
  decorators: [storyContainerDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    secondary: false,
    children: (
      <>
        <LegacyBreadcrumbItem label="Home" href="/" />
        <LegacyBreadcrumbItem label="Titel eines Artikels" />
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof LegacyBreadcrumb>;

export const breadcrumb: Story = {};

export const scrolling: Story = {
  args: {
    children: (
      <>
        <LegacyBreadcrumbItem label="Home" href="/" />
        <LegacyBreadcrumbItem label="News" href="/news/" />
        <LegacyBreadcrumbItem label="Eine Unterkategorie" href="/news/" />
        <LegacyBreadcrumbItem label="Noch eine Unterkategorie" href="/news/" />
        <LegacyBreadcrumbItem label="Das hier ist ein wirklich langer Titel eines Artikels um zu demonstrieren, wie die Scrollversion aussieht" />
      </>
    ),
  },
};

export const greyBackground: Story = {
  args: {
    secondary: true,
  },
  decorators: [
    (StoryComp) => {
      return (
        <Box bg="background.secondary" px="20px" height="10vh">
          <StoryComp />
        </Box>
      );
    },
    storyContainerDecorator,
  ],
};
