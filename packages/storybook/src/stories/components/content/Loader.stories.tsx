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
        bg={select(
          'Farbe',
          {
            black: 'shades.black',
            grey42: 'shades.grey42',
            grey155: 'shades.grey155',
            grey232: 'shades.grey232',
            grey244: 'shades.grey244',
            white: 'shades.white',
            red: 'brand.red'
          },
          'shades.grey155'
        )}
      />
    ),
    {
      options: {
        showPanel: true
      }
    }
  );
