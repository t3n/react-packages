import React, { useState } from 'react';
import { Tag, Button, Box } from '@t3n/components';
import { MaterialClear } from '@t3n/icons';
import { boolean } from '@storybook/addon-knobs';
import { TagColorVariant } from '@t3n/components/src/Tag';
import { storyContainerDecorator } from '../../../utils/decorators';

const variants: TagColorVariant[] = [
  'primary',
  'secondary',
  'inverse',
  'black',
  'highlight',
];

export default {
  component: Tag,
  title: 'Components/Content/Tag',
  decorators: [storyContainerDecorator],
};

export const defaultStory = () => {
  return variants.map((variant) => (
    <Box m={5} key={variant}>
      <Tag colorVariant={variant}>Some tag</Tag>
    </Box>
  ));
};

defaultStory.story = {
  name: 'Tag',
};

export const smallTags = () => {
  return variants.map((variant) => (
    <Box m={5} key={variant}>
      <Tag colorVariant={variant} small>
        Small Tag
      </Tag>
    </Box>
  ));
};

smallTags.story = {
  name: 'Kleine Tags',
};

export const linkedTags = () => {
  const smallTag = boolean('Kleine Tags', false);

  return variants.map((variant) => (
    <Box m={5} key={variant}>
      <Tag link="#" colorVariant={variant} small={smallTag}>
        Text
      </Tag>
    </Box>
  ));
};

linkedTags.story = {
  name: 'Verlinkte Tags',
};

const ClicakbleTagList: React.FC = () => {
  const defaultTags = ['Google', 'Facebook', 'Amazon', 'Twitter'];
  const [tags, setTags] = useState(defaultTags);

  const smallTag = boolean('Kleine Tags', false);

  const removeTag = (tag: string) => {
    const filteredTags = tags.filter((t) => t !== tag);
    setTags(filteredTags);
  };

  return (
    <>
      {tags.map((tag) => (
        <Tag
          key={tag}
          m={2}
          colorVariant="secondary"
          onClick={() => removeTag(tag)}
          icon={<MaterialClear />}
          small={smallTag}
        >
          {tag}
        </Tag>
      ))}
      <br /> <br />
      <Button onClick={() => setTags(defaultTags)}>Reset</Button>
    </>
  );
};

export const clickableTags = () => <ClicakbleTagList />;

clickableTags.story = {
  name: 'Tags mit Klick-Event',
};
