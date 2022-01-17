import React from 'react';
import { boolean, select } from '@storybook/addon-knobs';

import { Loader } from '@t3n/components';
import { theme } from '@t3n/theme';

import { storyContainerContentDecorator } from '../../../utils/decorators';

export default {
  title: 'Components/Content/Loader',
  component: Loader,
  decorators: [storyContainerContentDecorator],
};

export const defaultStory = () => (
  <Loader
    small={boolean('small', true)}
    color={select(
      'Farbe',
      Object.keys(theme.colors.background).map(
        (color) => `background.${color}`
      ),
      'background.inverse'
    )}
  />
);

defaultStory.storyName = 'Default';
