import React from 'react';
import { TagList, Tag } from '@t3n/components';
import { select } from '@storybook/addon-knobs';
import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  component: TagList,
  title: 'Components/Content/TagList',
  decorators: [storyContainerDecorator],
};

export const defaultStory = () => {
  const colorVariant = select(
    'colorVariant',
    ['inverse', 'primary', 'secondary', 'black', 'highlight'],
    'secondary'
  );
  const tagValues = [
    'PHP',
    'React JS',
    'Neos CMS',
    'Flow Framework',
    'Symfony',
    'Laravel',
  ];

  const tags = tagValues.map((label) => (
    <Tag colorVariant={colorVariant} mr={2}>
      {label}
    </Tag>
  ));

  return <TagList colorVariant={colorVariant} collapseAfter={3} tags={tags} />;
};

defaultStory.story = {
  name: 'Liste mit Tags',
};
