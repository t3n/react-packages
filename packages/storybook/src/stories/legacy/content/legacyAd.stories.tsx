import React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import type { Story } from '@storybook/react';

import { LegacyAd } from '@t3n/components';
import { LegacyAdName } from '@t3n/components/src/LegacyAd/LegacyAd';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  component: LegacyAd,
  title: 'Legacy/Content/Ad',
  decorators: [storyContainerDecorator],
};

export const defaultStory: Story = () => (
  <LegacyAd
    name={
      select(
        'Name',
        [
          'p0',
          'p1',
          'p2',
          'p3',
          'p4',
          'p5',
          'p6',
          'p7',
          'p8',
          'p11',
          'p12',
          'p13',
          'p14',
          'p15',
          'p16',
          'p17',
          'p18',
          'p19',
          'p20',
        ],
        'p0'
      ) as LegacyAdName
    }
    preview={boolean('Preview', true)}
  />
);

defaultStory.storyName = 'Default';
