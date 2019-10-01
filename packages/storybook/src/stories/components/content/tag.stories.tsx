import React, { useState } from 'react';
import { Tag, Button, Box } from '@t3n/components';
import { MaterialClear } from '@t3n/icons';
import { withKnobs } from '@storybook/addon-knobs';
import { TagColorVariant } from '@t3n/components/src/Tag';
import { storyContainerDecorator } from '../../../utils/decorators';

const variants: TagColorVariant[] = ['primary', 'secondary', 'inverse'];

export const defaultStory = () => {
  return variants.map(variant => (
    <Box m={4} key={variant}>
      <Tag colorVariant={variant}>Text</Tag>
    </Box>
  ));
};

defaultStory.story = {
  name: 'Einzelner Tag'
};

export const linkedTags = () => {
  return variants.map(variant => (
    <Box m={4} key={variant}>
      <Tag link="#" colorVariant={variant}>
        Text
      </Tag>
    </Box>
  ));
};

linkedTags.story = {
  name: 'Verlinkte Tags'
};

const ClicakbleTagList: React.FC = () => {
  const defaultTags = ['Google', 'Facebook', 'Amazon', 'Twitter'];
  const [tags, setTags] = useState(defaultTags);

  const removeTag = (tag: string) => {
    const filteredTags = tags.filter(t => t !== tag);
    setTags(filteredTags);
  };

  return (
    <>
      {tags.map(tag => (
        <Tag
          key={tag}
          mr={2}
          colorVariant="secondary"
          onClick={() => removeTag(tag)}
          icon={<MaterialClear />}
        >
          {tag}
        </Tag>
      ))}
      <Button color="dark" onClick={() => setTags(defaultTags)}>
        Reset
      </Button>
    </>
  );
};

export const clickableTags = () => <ClicakbleTagList />;

clickableTags.story = {
  name: 'Tags mit Klick-Event'
};

export default {
  component: Tag,
  title: 'Components|Content/Tag',
  decorators: [withKnobs, storyContainerDecorator]
};
