import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Card, CardHeader, Headline, Text, Grid, Item } from '@t3n/components';
import StoryContainer from '../components/StoryContainer';
import { knobsFromProps } from '../utils/knobs';

const cardKnobs = knobsFromProps(Card);

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryContainer bg="brand.greyLighter">
      <Grid noGap justifyContent="center">
        <Item width={[1, 2 / 3, 1 / 2]}>{story()}</Item>
      </Grid>
    </StoryContainer>
  ))
  .addWithJSX('Simple', () => (
    <Card {...cardKnobs()}>
      <Headline is="h2" mt={0}>
        {text('Headline', 'Lorem ipsum dolor sit amet')}
      </Headline>
      <Text my={0}>
        {text(
          'Copy Text',
          'The Caterpillar and Alice looked at each other for some time in silence: at last the Caterpillar took the hookah out of its mouth, and addressed her in a languid, sleepy voice.'
        )}
      </Text>
    </Card>
  ))
  .addWithJSX('Link', () => (
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
  ))
  .addWithJSX('Image', () => (
    <Card href="#">
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
  .addWithJSX('Big', () => (
    <Card big href="#">
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
  ));
