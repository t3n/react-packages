import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import {
  Card,
  CardHeader,
  CardSplitContent,
  Heading,
  Text,
  Grid,
  GridItem,
  Logo,
  H3
} from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';
import { knobsFromProps } from '../../../utils/knobs';

export default {
  title: 'Components|Content/Card',
  component: Card,
  decorators: [
    (story: any) => (
      <Grid noGap justifyContent="center">
        <GridItem width={[1, 2 / 3, 1 / 2]}>{story()}</GridItem>
      </Grid>
    ),
    storyContainerDecorator,
    withKnobs
  ]
};

const KNOBS_CATEGORY_CARD = 'Card';
const KNOBS_CATEGORY_HEADER = 'Header';
const KNOBS_CATEGORY_CONTENT = 'Content';

const cardKnobs = knobsFromProps(Card);
const headerKnobs = knobsFromProps(CardHeader);

const headlineText = 'Lorem ipsum dolor sit amet';
const copyText =
  'The Caterpillar and Alice looked at each other for some time in silence: at last the Caterpillar took the hookah out of its mouth, and addressed her in a languid, sleepy voice.';

export const defaultStory = () => (
  <Card {...cardKnobs({}, KNOBS_CATEGORY_CARD)}>
    <Heading as="h2" mt={0}>
      {text('Headline', headlineText, KNOBS_CATEGORY_CONTENT)}
    </Heading>
    <Text my={0}>{text('Paragraph', copyText, KNOBS_CATEGORY_CONTENT)}</Text>
  </Card>
);

defaultStory.story = {
  name: 'Default'
};

export const link = () => (
  <Card {...cardKnobs({ href: '#' }, KNOBS_CATEGORY_CARD)}>
    <Heading as="h2" mt={0}>
      {text('Headline', headlineText, KNOBS_CATEGORY_CONTENT)}
    </Heading>
    <Text my={0}>{text('Paragraph', copyText, KNOBS_CATEGORY_CONTENT)}</Text>
  </Card>
);

export const header = () => (
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
    <Heading as="h2" styleAs="h5" mt={0}>
      {text('Headline', headlineText, KNOBS_CATEGORY_CONTENT)}
    </Heading>
    <Text my={0}>{text('Paragraph', copyText, KNOBS_CATEGORY_CONTENT)}</Text>
  </Card>
);

export const big = () => (
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
    <Heading as="h2" mt={0}>
      {text('Headline', headlineText, KNOBS_CATEGORY_CONTENT)}
    </Heading>
    <Text my={0}>{text('Paragraph', copyText, KNOBS_CATEGORY_CONTENT)}</Text>
  </Card>
);

export const bigWithHeaderContent = () => (
  <Card big>
    <CardHeader
      {...headerKnobs(
        {
          ratio: 16 / 9
        },
        KNOBS_CATEGORY_HEADER,
        ['children', 'is']
      )}
    >
      <H3>Content</H3>
    </CardHeader>
    <Heading as="h2" mt={0}>
      {text('Headline', headlineText, KNOBS_CATEGORY_CONTENT)}
    </Heading>
    <Text my={0}>{text('Paragraph', copyText, KNOBS_CATEGORY_CONTENT)}</Text>
  </Card>
);

export const split = () => (
  <Card splitted>
    <CardSplitContent variant="secondary">
      <Logo height="40" />
    </CardSplitContent>
    <CardSplitContent>
      <Heading as="h3">Melde dich jetzt an!</Heading>
      <Text>Erstelle dir jetzt einen Account bei t3n.de</Text>
    </CardSplitContent>
  </Card>
);
