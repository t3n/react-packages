import React from 'react';
import { number, text } from '@storybook/addon-knobs';

import { Text, Textarea } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  component: Textarea,
  title: 'Components/Inputs/Textarea',
  decorators: [storyContainerDecorator],
};

export const defaultStory = () => {
  const maxLength = number('Maximale Länge', 200, { min: 1 });

  return (
    <Textarea
      width={number('Width', 0.5, {
        range: true,
        min: 0.1,
        max: 1,
        step: 0.1,
      })}
      rows={number('Rows', 6)}
      maxLength={maxLength}
      placeholder={text('Placeholder', '')}
    />
  );
};

defaultStory.storyName = 'Default';

export const placeholderStory = () => {
  const maxLength = number('Maximale Länge', 200, { min: 1 });

  return (
    <>
      <Text>Mit Placeholder und MaxLength</Text>
      <Textarea
        width={0.5}
        placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr..."
        maxLength={maxLength}
      />
    </>
  );
};

placeholderStory.storyName = 'Placeholder';

export const valueStory = () => {
  const maxLength = number('Maximale Länge', 200, { min: 1 });

  return (
    <>
      <Text>Mit Value und MaxLength</Text>
      <Textarea
        width={0.5}
        defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing elitr..."
        maxLength={maxLength}
      />
    </>
  );
};

valueStory.storyName = 'Value';

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

focused.storyName = 'Focus';

export const errorStates = () => (
  <Textarea error width={0.5} defaultValue="Invalid" maxLength={200} />
);
