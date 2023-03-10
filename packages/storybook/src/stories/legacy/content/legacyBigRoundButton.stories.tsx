import React from 'react';

import { LegacyBigRoundButton } from '@t3n/components';
import { MaterialRssFeed } from '@t3n/icons';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Legacy/Content/BigRoundButton',
  component: LegacyBigRoundButton,
  decorators: [storyContainerDecorator],
};

export const defaultStory = () => {
  return (
    <LegacyBigRoundButton
      icon={MaterialRssFeed}
      url="https://t3n.de"
      tooltipText="Das ist der Tooltip-Text!"
      rel="nofollow"
    />
  );
};

defaultStory.storyName = 'Default';
