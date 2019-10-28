import React from 'react';
import { withKnobs, select, text, number } from '@storybook/addon-knobs';
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
    variant={select<DividerVariants>(
      'Farbe',
      Object.keys(theme.colors.text) as DividerVariants[],
      'secondary'
    )}
  >
    {text('Divider Text', 'oder')}
  </Divider>
);

defaultStory.story = {
  name: 'Default'
};
