import React from 'react';

import { Slider } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Components|Inputs/Slider',
  component: Slider,
  decorators: [storyContainerDecorator]
};

export const defaultStory = () => (
  <Slider initialValue={5} min={5} max={20} step={2} />
);

defaultStory.story = {
  name: 'Default'
};
