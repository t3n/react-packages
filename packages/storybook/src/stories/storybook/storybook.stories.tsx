import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';

import StoryContainer from '../../components/StoryContainer';

import introduction from './introduction.md';
import usage from './usage.md';
import editor from './editor.md';

storiesOf('Storybook|Info', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .add('Einleitung', doc(introduction), {
    options: {
      showPanel: false
    }
  })
  .add('Zur Nutzung', doc(usage), {
    options: {
      showPanel: false
    }
  })
  .add('Der Editor', doc(editor), {
    options: {
      showPanel: false
    }
  });
