import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Tag, TagList } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const tagValues = [
  'PHP',
  'React JS',
  'Neos CMS',
  'Flow Framework',
  'Symfony',
  'Laravel',
];

const meta: Meta<typeof TagList> = {
  component: TagList,
  title: 'Components/Content/TagList',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    colorVariant: 'secondary',
    small: false,
    collapseAfter: 5,
    initialCollapsed: true,
    tags: tagValues.map((label) => (
      <Tag colorVariant="secondary" mr={2}>
        {label}
      </Tag>
    )),
  },
};

export default meta;
type Story = StoryObj<typeof TagList>;

export const tagList: Story = {};

export const smallTagList: Story = {
  args: {
    small: true,
    tags: tagValues.map((label) => (
      <Tag colorVariant="secondary" small mr={2}>
        {label}
      </Tag>
    )),
  },
};

export const collapsedTagList: Story = {
  args: {
    initialCollapsed: false,
  },
};
