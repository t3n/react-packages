import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Card, CardHeader, Headline, Text, Grid, Item } from '@t3n/components';
import StoryContainer from '../../../components/StoryContainer';
import { knobsFromProps } from '../../../utils/knobs';

const cardKnobs = knobsFromProps(Card);

const headlineText = 'Lorem ipsum dolor sit amet';
const copyText =
  'The Caterpillar and Alice looked at each other for some time in silence: at last the Caterpillar took the hookah out of its mouth, and addressed her in a languid, sleepy voice.';

storiesOf('Components/Card', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryContainer bg="brand.greyLighter">
      <Grid noGap justifyContent="center">
        <Item width={[1, 2 / 3, 1 / 2]}>{story()}</Item>
      </Grid>
    </StoryContainer>
  ))
  .addWithJSX('Basic', () => (
    <Card {...cardKnobs()}>
      <Headline is="h2" mt={0}>
        {text('Headline', headlineText)}
      </Headline>
      <Text my={0}>{text('Paragraph', copyText)}</Text>
    </Card>
  ))
  .addWithJSX('Link', () => (
    <Card href="#">
      <Headline is="h2" mt={0}>
        {text('Headline', headlineText)}
      </Headline>
      <Text my={0}>{text('Paragraph', copyText)}</Text>
    </Card>
  ))
  .addWithJSX('Image', () => (
    <Card href="#">
      <CardHeader
        ratio={16 / 9}
        image="https://images.unsplash.com/photo-1548594108-b8fc35b9b23f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      />
      <Headline is="h2" mt={0}>
        {text('Headline', headlineText)}
      </Headline>
      <Text my={0}>{text('Paragraph', copyText)}</Text>
    </Card>
  ))
  .addWithJSX('Big', () => (
    <Card big href="#">
      <CardHeader bgImage="https://images.unsplash.com/photo-1548594108-b8fc35b9b23f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
      <Headline is="h2" mt={0}>
        {text('Headline', headlineText)}
      </Headline>
      <Text my={0}>{text('Paragraph', copyText)}</Text>
    </Card>
  ));
