import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Grid, GridItem, NewsCard } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof NewsCard> = {
  component: NewsCard,
  title: 'Components/Cards/NewsCard',
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
    loading: false,
    type: 'HERO',
    news: {
      title:
        'Mediamarkt und Saturn: US-Managerin DiMotta soll Wachstum bringen',
      author: {
        name: 'Tobias Weidemann',
        avatar:
          'https://storage.googleapis.com/t3n-de/neos/a0bb50df94a67b9f79a0cd4d95ee9fab293105f9/tw_pic.jpg',
      },
      publishedAt: new Date('Wed, 14 Aug 2019 10:30:30 GMT'),
      imageUrl:
        'https://t3n.de/news/wp-content/uploads/2017/06/Media-saturn-ingolstadt-redcoon.jpg',
      url: 'https://t3n.de/news/mediamarkt-saturn-kaum-wachstum-1187784/',
      type: 'Ratgeber',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NewsCard>;

export const hero: Story = {};

export const author: Story = {
  args: { type: 'AUTHOR' },
};

export const loadingHero: Story = {
  args: { loading: true },
};

export const loadingAuthor: Story = {
  args: { loading: true, type: 'AUTHOR' },
};
