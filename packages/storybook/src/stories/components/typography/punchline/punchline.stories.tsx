import React from 'react';

import { Text } from '@t3n/components';

import { storyContainerDecorator } from '../../../../utils/decorators';

export default {
  title: 'Components|Typografie/Punchline',
  component: Text,
  decorators: [storyContainerDecorator]
};

export const defaultStory = () => <Text>todo</Text>;

defaultStory.story = {
  name: 'Default'
};
