import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';

import StoryContainer from '../../../../components/StoryContainer';

import typography from './typography.md';

storiesOf('Style|Typography', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .add('Einleitung', doc(typography));
