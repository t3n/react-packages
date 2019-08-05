import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';

import StoryContainer from '../../components/StoryContainer';

import brand from './brand.md';

storiesOf('Brand|Info', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .add('Brand', doc(brand), {
    options: {
      showPanel: false
    }
  });
