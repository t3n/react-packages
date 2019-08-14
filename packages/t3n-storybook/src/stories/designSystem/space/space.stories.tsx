import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryContainer from '../../../components/StoryContainer';

storiesOf('Design System|Space', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .add('Abstände', () => <p>todo, visualisierung der margins und paddings</p>);
