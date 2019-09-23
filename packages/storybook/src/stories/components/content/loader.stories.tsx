import React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { Loader } from '@t3n/components';
import { LoaderVariants } from '@t3n/components/src/Loader/Loader';

import { theme } from '@t3n/theme';
import { storyContainerContentDecorator } from '../../../utils/decorators';

export default {
  title: 'Components|Content/Loader',
  component: Loader,
  decorators: [withKnobs, storyContainerContentDecorator]
};

export const defaultStory = () => (
  <Loader
    small={boolean('small', false)}
    backgroundColor={select<LoaderVariants>(
      'Farbe',
      Object.keys(theme.colors.background) as LoaderVariants[],
      'inverse'
    )}
  />
);

defaultStory.story = {
  name: 'Default'
};
