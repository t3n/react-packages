import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from '@t3n/components';
import StoryContainer from '../../../../components/StoryContainer';

storiesOf('Components|Typografie/Punchline', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .add('Default', () => <Text>todo</Text>, {
    options: {
      showPanel: false
    }
  });
