import React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { Loader } from '@t3n/components';
import { theme } from '@t3n/theme';
import { storyContainerContentDecorator } from '../../../utils/decorators';

export default {
  title: 'Components|Content/Loader',
  component: Loader,
  decorators: [withKnobs, storyContainerContentDecorator]
};

export const defaultStory = () => (
  <Loader
    small={boolean('small', true)}
    color={select(
      'Farbe',
      Object.keys(theme.colors.background).map(color => `background.${color}`),
      'background.inverse'
    )}
  />
);

defaultStory.story = {
  name: 'Default'
};
