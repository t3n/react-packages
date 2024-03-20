import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Breadcrumbs, BreadcrumbsItem } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: 'Components/Layout/Breadcrumbs',
  decorators: [storyContainerDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    children: (
      <>
        <BreadcrumbsItem label="Homepage" href="/" />
        <BreadcrumbsItem label="Subpage" href="/" />
        <BreadcrumbsItem label="Current Page" />
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const breadcrumbs: Story = {};
