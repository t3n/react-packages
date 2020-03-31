import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { Textarea, Text } from '@t3n/components';
import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  component: Textarea,
  title: 'Components|Inputs/Textarea',
  decorators: [withKnobs, storyContainerDecorator],
};

export const defaultStory = () => {
  const maxLength = number('Maximale Länge', 200, { min: 1 });

  return (
    <>
      <Text>Ohne Value, Placeholder und MaxLength</Text>
      <Textarea width={0.5} />
      <Text>Mit Placeholder und MaxLength</Text>
      <Textarea
        width={0.5}
        placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr..."
        maxLength={maxLength}
      />
      <Text>Mit Value und MaxLength</Text>
      <Textarea
        width={0.5}
        defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing elitr..."
        maxLength={maxLength}
      />
    </>
  );
};

defaultStory.story = {
  name: 'Default',
};

export const disabled = () => {
  return (
    <>
      <Text>Ohne Value und Placeholder</Text>
      <Textarea disabled width={0.5} maxLength={200} />
      <Text>Mit Placeholder</Text>
      <Textarea
        disabled
        width={0.5}
        placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr..."
        maxLength={200}
      />
      <Text>Mit Value</Text>
      <Textarea
        disabled
        width={0.5}
        defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing elitr..."
        maxLength={200}
      />
    </>
  );
};

export const focused = () => (
  <Textarea
    isFocused
    width={0.5}
    defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing elitr..."
    maxLength={200}
  />
);

focused.story = {
  name: 'Focus',
};

export const errorStates = () => (
  <Textarea error width={0.5} defaultValue="Invalid" maxLength={200} />
);
