import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';

import StoryContainer from '../../../../components/StoryContainer';

import fonts from './fonts.md';

storiesOf('Components|Typografie', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .add('Fonts', doc(fonts), {
    options: {
      showPanel: false
    }
  });
