import React from 'react';

import { LegacySocialBar } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  component: LegacySocialBar,
  title: 'Legacy/Content/SocialBar',
  decorators: [storyContainerDecorator],
};

export const defaultStory = () => {
  return <LegacySocialBar />;
};

defaultStory.storyName = 'Default';
