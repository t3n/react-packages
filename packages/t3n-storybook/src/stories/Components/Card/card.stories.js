import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Card, CardHeader, Heading, Text, Grid, Item } from '@t3n/components';
import StoryContainer from '../../../components/StoryContainer';
import { knobsFromProps } from '../../../utils/knobs';

const KNOBS_CATEGORY_CARD = 'Card';
const KNOBS_CATEGORY_HEADER = 'Header';
const KNOBS_CATEGORY_CONTENT = 'Content';

const cardKnobs = knobsFromProps(Card);
const headerKnobs = knobsFromProps(CardHeader);

const headlineText = 'Lorem ipsum dolor sit amet';
const copyText =
  'The Caterpillar and Alice looked at each other for some time in silence: at last the Caterpillar took the hookah out of its mouth, and addressed her in a languid, sleepy voice.';

storiesOf('Components|Card', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryContainer>
      <Grid noGap justifyContent="center">
        <Item width={[1, 2 / 3, 1 / 2]}>{story()}</Item>
      </Grid>
    </StoryContainer>
  ))
  // Basic Story
  .addWithJSX('Basic', () => (
    <Card {...cardKnobs({}, KNOBS_CATEGORY_CARD)}>
      <Heading is="h2" mt={0}>
        {text('Headline', headlineText, KNOBS_CATEGORY_CONTENT)}
      </Heading>
      <Text my={0}>{text('Paragraph', copyText, KNOBS_CATEGORY_CONTENT)}</Text>
    </Card>
  ))
  // Link Story
  .addWithJSX('Link', () => (
    <Card {...cardKnobs({ href: '#' }, KNOBS_CATEGORY_CARD)}>
      <Heading is="h2" mt={0}>
        {text('Headline', headlineText, KNOBS_CATEGORY_CONTENT)}
      </Heading>
      <Text my={0}>{text('Paragraph', copyText, KNOBS_CATEGORY_CONTENT)}</Text>
    </Card>
  ))
  // Header Story
  .addWithJSX('Header', () => (
    <Card>
      <CardHeader
        {...headerKnobs(
          {
            ratio: 16 / 9,
            image:
              'https://images.unsplash.com/photo-1548594108-b8fc35b9b23f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
          },
          KNOBS_CATEGORY_HEADER,
          ['children', 'is']
        )}
      />
      <Heading is="h2" as="h5" mt={0}>
        {text('Headline', headlineText, KNOBS_CATEGORY_CONTENT)}
      </Heading>
      <Text my={0}>{text('Paragraph', copyText, KNOBS_CATEGORY_CONTENT)}</Text>
    </Card>
  ))
  // Big Story
  .addWithJSX('Big', () => (
    <Card big>
      <CardHeader
        {...headerKnobs(
          {
            ratio: 16 / 9,
            image:
              'https://images.unsplash.com/photo-1548594108-b8fc35b9b23f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
          },
          KNOBS_CATEGORY_HEADER,
          ['children', 'is']
        )}
      />
      <Heading is="h2" mt={0}>
        {text('Headline', headlineText, KNOBS_CATEGORY_CONTENT)}
      </Heading>
      <Text my={0}>{text('Paragraph', copyText, KNOBS_CATEGORY_CONTENT)}</Text>
    </Card>
  ));
