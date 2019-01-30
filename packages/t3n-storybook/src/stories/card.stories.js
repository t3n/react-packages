import React from 'react';
import { storiesOf } from '@storybook/react';

import { Card, CardHeader, Headline, Text } from '@t3n/components';
import StoryContainer from '../components/StoryContainer';

storiesOf('Card', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .add('Simple', () => (
    <Card narrow href="#">
      <Headline is="h2" mt={0}>
        Lorem ipsum dolor sit amet
      </Headline>
      <Text my={0}>
        The Caterpillar and Alice looked at each other for some time in silence:
        at last the Caterpillar took the hookah out of its mouth, and addressed
        her in a languid, sleepy voice.
      </Text>
    </Card>
  ))
  .add('with Header', () => (
    <Card narrow href="#">
      <CardHeader bgImage="https://images.unsplash.com/photo-1548594108-b8fc35b9b23f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
      <Headline is="h2" mt={0}>
        Lorem ipsum dolor sit amet
      </Headline>
      <Text my={0}>
        The Caterpillar and Alice looked at each other for some time in silence:
        at last the Caterpillar took the hookah out of its mouth, and addressed
        her in a languid, sleepy voice.
      </Text>
    </Card>
  ))
  .add('Wide', () => (
    <Card href="#">
      <Headline is="h2" mt={0}>
        Lorem ipsum dolor sit amet
      </Headline>
      <Text my={0}>
        The Caterpillar and Alice looked at each other for some time in silence:
        at last the Caterpillar took the hookah out of its mouth, and addressed
        her in a languid, sleepy voice.
      </Text>
    </Card>
  ));
