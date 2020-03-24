import React from 'react';

import { Box, Center } from '@t3n/components';
import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Components|Layout/Center',
  component: Center,
  decorators: [storyContainerDecorator],
};

export const defaultStory = () => (
  <Center>
    <Box width={1 / 2} height="200px" p={3} bg="background.secondary">
      Zentrierte Box
    </Box>
  </Center>
);

defaultStory.story = {
  name: 'Default',
};
