import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';

import StoryContainer from '../../../../components/StoryContainer';

import typography from './typography.md';

storiesOf('Brand|Typografie', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .add('Einleitung', doc(typography), {
    options: {
      showPanel: false
    }
  });
