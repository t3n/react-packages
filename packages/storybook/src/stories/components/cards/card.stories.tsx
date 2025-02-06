import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import {
  Card,
  CardHeader,
  CardSplitContent,
  Grid,
  GridItem,
  Heading,
  Logo,
  Text,
} from '@t3n/components';
import { CardProps } from '@t3n/components/src/Card';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<CardProps> = {
  component: Card,
  title: 'Components/Cards/Card',
  decorators: [
    (StoryComp) => (
      <Grid noGap justifyContent="center">
        <GridItem width={[1, 2 / 3, 1 / 2]}>
          <StoryComp />
        </GridItem>
      </Grid>
    ),
    storyContainerContentDecorator,
  ],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    rounded: true,
    big: false,
    stretch: false,
    elevate: false,
    dashed: false,
    splitted: false,
    href: '',
    targetBlank: false,
    color: 'text.primary',
    width: '1',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const card: Story = {
  args: {
    children: (
      <Text my={0}>
        The Caterpillar and Alice looked at each other for some time in silence:
        at last the Caterpillar took the hookah out of its mouth, and addressed
        her in a languid, sleepy voice.
      </Text>
    ),
  },
};

export const linked: Story = {
  args: {
    children: (
      <Text my={0}>
        The Caterpillar and Alice looked at each other for some time in silence:
        at last the Caterpillar took the hookah out of its mouth, and addressed
        her in a languid, sleepy voice.
      </Text>
    ),
    href: 'https://t3n.de',
  },
};

export const header: Story = {
  args: {
    children: (
      <>
        <CardHeader
          ratio={16 / 9}
          bg="background.primary"
          image="https://images.unsplash.com/photo-1548594108-b8fc35b9b23f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        />
        <Text my={0}>
          The Caterpillar and Alice looked at each other for some time in
          silence: at last the Caterpillar took the hookah out of its mouth, and
          addressed her in a languid, sleepy voice.
        </Text>
      </>
    ),
  },
};

export const padding: Story = {
  args: {
    big: true,
    children: (
      <Text my={0}>
        The Caterpillar and Alice looked at each other for some time in silence:
        at last the Caterpillar took the hookah out of its mouth, and addressed
        her in a languid, sleepy voice.
      </Text>
    ),
  },
};

export const splitted: Story = {
  args: {
    splitted: true,
    children: (
      <>
        <CardSplitContent variant="inverse">
          <Logo height="40" />
        </CardSplitContent>
        <CardSplitContent>
          <Heading as="h3">Melde dich jetzt an!</Heading>
          <Text>Erstelle dir jetzt einen Account bei t3n.de</Text>
        </CardSplitContent>
      </>
    ),
  },
};
