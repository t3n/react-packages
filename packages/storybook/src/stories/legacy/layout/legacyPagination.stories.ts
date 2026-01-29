import { Meta, StoryObj } from '@storybook/react';

import { LegacyPagination } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

const meta: Meta<typeof LegacyPagination> = {
  component: LegacyPagination,
  title: 'Legacy/Layout/Pagination',
  decorators: [storyContainerDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    currentPage: 1,
    totalPages: 10,
    maxPageLinks: 5,
  },
};

export default meta;
type Story = StoryObj<typeof LegacyPagination>;

export const pagination: Story = {};
