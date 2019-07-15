import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';

import StoryContainer from '../../../components/StoryContainer';

import logo from './logo.md';
import farben from './farben.md';
import kooperationen from './kooperationen.md';

storiesOf('Visual Identity|Logo', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .add('Einleitung', doc(logo), {
    options: {
      showPanel: false
    }
  })
  .add('Farben', doc(farben), {
    options: {
      showPanel: false
    }
  })
  .add('Kooperationen', doc(kooperationen), {
    options: {
      showPanel: false
    }
  });
