import React from 'react';

import { Placeholder } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Components/Content/Loading Indicator',
  component: Placeholder,
  decorators: [storyContainerDecorator],
};

export const defaultStory = () => <Placeholder height="2rem" p={3} />;

defaultStory.story = {
  name: 'Default',
};
