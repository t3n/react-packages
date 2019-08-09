import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import {
  Card,
  CardHeader,
  CardSplitContent,
  Heading,
  Text,
  Grid,
  GridItem,
  Logo
} from '@t3n/components';

import CardReadme from '@t3n/components/src/Card/CARD.md';
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

storiesOf('Components|Content/Card', module)
  .addParameters({
    readme: {
      sidebar: CardReadme
    }
  })
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryContainer>
      <Grid noGap justifyContent="center">
        <GridItem width={[1, 2 / 3, 1 / 2]}>{story()}</GridItem>
      </Grid>
    </StoryContainer>
  ))
  // Basic Story
  .add(
    'Basic',
    () => (
      <Card {...cardKnobs({}, KNOBS_CATEGORY_CARD)}>
        <Heading as="h2" mt={0}>
          {text('Headline', headlineText, KNOBS_CATEGORY_CONTENT)}
        </Heading>
        <Text my={0}>
          {text('Paragraph', copyText, KNOBS_CATEGORY_CONTENT)}
        </Text>
      </Card>
    ),
    {
      options: {
        showPanel: true
      }
    }
  )
  // Link Story
  .add(
    'Link',
    () => (
      <Card {...cardKnobs({ href: '#' }, KNOBS_CATEGORY_CARD)}>
        <Heading as="h2" mt={0}>
          {text('Headline', headlineText, KNOBS_CATEGORY_CONTENT)}
        </Heading>
        <Text my={0}>
          {text('Paragraph', copyText, KNOBS_CATEGORY_CONTENT)}
        </Text>
      </Card>
    ),
    {
      options: {
        showPanel: true
      }
    }
  )
  // Header Story
  .add(
    'Header',
    () => (
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
        <Text my={0}>
          {text('Paragraph', copyText, KNOBS_CATEGORY_CONTENT)}
        </Text>
      </Card>
    ),
    {
      options: {
        showPanel: true
      }
    }
  )
  // Big Story
  .add(
    'Big',
    () => (
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
        <Text my={0}>
          {text('Paragraph', copyText, KNOBS_CATEGORY_CONTENT)}
        </Text>
      </Card>
    ),
    {
      options: {
        showPanel: true
      }
    }
  )
  .add(
    'Split',
    () => (
      <Card splitted>
        <CardSplitContent bgColor="highlight">
          <Logo height="40" />
        </CardSplitContent>
        <CardSplitContent>
          <Heading as="h3">Melde dich jetzt an!</Heading>
          <Text>Erstelle dir jetzt einen Account bei t3n.de</Text>
        </CardSplitContent>
      </Card>
    ),
    {
      options: { showPanel: true }
    }
  );
