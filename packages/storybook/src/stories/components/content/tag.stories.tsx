import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Tag } from '@t3n/components';
import { MaterialBeachAccess } from '@t3n/icons';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: 'Components/Content/Tag',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    colorVariant: 'secondary',
    small: false,
    children: 'Ich bin ein Tag',
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const tag: Story = {};

export const smallTag: Story = {
  args: { small: true },
};

export const linkedTags: Story = {
  args: {
    link: 'https://t3n.de',
  },
};

export const clickableTags: Story = {
  args: {
    onClick: () => {
      alert('Tag geklickt');
    },
  },
};

export const tagWithIcon: Story = {
  args: {
    icon: <MaterialBeachAccess />,
  },
};
