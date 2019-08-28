import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Content, TitleCard } from '@t3n/components';

import StoryContainer from '../../../components/StoryContainer';

storiesOf('Components|Content/TitleCard', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryContainer>
      <Content>{story()} </Content>
    </StoryContainer>
  ))
  .add(
    'Default',
    () => {
      return (
        <TitleCard
          title={text('Title', 'Default Title')}
          titleAs={select(
            'Title Tag',
            { h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6' },
            'h3'
          )}
        >
          Hallo
        </TitleCard>
      );
    },
    {
      options: {
        showPanel: true
      }
    }
  );
