import React, { useState } from 'react';
import { number, array, withKnobs } from '@storybook/addon-knobs';

import { Slider, Text } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Components|Inputs/Slider',
  component: Slider,
  decorators: [withKnobs, storyContainerDecorator]
};

export const defaultStory = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(0);
  const minKnob = number('Min', 0);
  const maxKnob = number('Max', 20);
  const stepKnob = number('Step', 5);
  const labelsKnob = array('Labels', ['0', '5', '10', '15', '20']);

  return (
    <>
      <Slider
        name="slider"
        min={minKnob}
        max={maxKnob}
        step={stepKnob}
        labels={labelsKnob}
        onChange={setValue}
      />
      <Text>Selected value: {value}</Text>
    </>
  );
};

defaultStory.story = {
  name: 'Default'
};

export const range = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(0);

  return (
    <>
      <Slider
        name="slider"
        max={10}
        step={1}
        labels={['0', '10']}
        onChange={setValue}
      />
      <Text>Selected value: {value}</Text>
    </>
  );
};
