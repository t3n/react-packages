import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Content, Loader } from '@t3n/components';

import StoryContainer from '../../../components/StoryContainer';

storiesOf('Components|Content/Loader', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryContainer>
      <Content>{story()} </Content>
    </StoryContainer>
  ))
  .add(
    'Default',
    () => (
      <Loader
        backgroundColor={select(
          'Farbe',
          {
            Primary: 'primary',
            Secondary: 'secondary',
            Inverse: 'inverse',
            Highlight: 'highlight'
          },
          'secondary'
        )}
      />
    ),
    {
      options: {
        showPanel: true
      }
    }
  );
