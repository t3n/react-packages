import React from 'react';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import { Divider } from '@t3n/components';
import { DividerVariants } from '@t3n/components/src/Divider/Divider';

import { theme } from '@t3n/theme';
import { storyContainerContentDecorator } from '../../../utils/decorators';

export default {
  title: 'Components|Layout/Divider',
  component: Divider,
  decorators: [withKnobs, storyContainerContentDecorator]
};

export const defaultStory = () => (
  <Divider
    width={number('Breite', 0.3, {
      range: true,
      min: 0,
      max: 1,
      step: 0.1
    })}
    height={`${number('Höhe', 2, {
      range: true,
      min: 1,
      max: 5,
      step: 1
    })}px`}
    backgroundColor={select<DividerVariants>(
      'Farbe',
      Object.keys(theme.colors.background) as DividerVariants[],
      'secondary'
    )}
  />
);

defaultStory.story = {
  name: 'Default'
};
