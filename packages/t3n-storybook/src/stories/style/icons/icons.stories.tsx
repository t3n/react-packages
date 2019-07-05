import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';

import StoryContainer from '../../../components/StoryContainer';

import icons from './icons.md';
import library from './library.md';

storiesOf('Visual Identity|Iconografie', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .add('Einleitung', doc(icons))
  .add('Library', doc(library));
