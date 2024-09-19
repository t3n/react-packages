/* eslint-disable no-alert */
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Grid, GridItem, LegacyNewsCard } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

const meta: Meta<typeof LegacyNewsCard> = {
  component: LegacyNewsCard,
  title: 'Legacy/Content/NewsCard',
  decorators: [
    (StoryComp) => (
      <Grid noGap justifyContent="center">
        <GridItem width={[1, 2 / 3, 1 / 2]}>
          <StoryComp />
        </GridItem>
      </Grid>
    ),
    storyContainerDecorator,
  ],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    loading: false,
    news: {
      title:
        'Mediamarkt und Saturn: US-Managerin DiMotta soll Wachstum bringen',
      teaser:
        'Sorgen um Mediamarkt und Saturn: Die Elektronikmarktketten laufen trotz gutem Onlinegeschäft weniger erfolgreich. Jetzt soll eine neue „Geheimwaffe“ für mehr Gewinn sorgen.',
      author: {
        name: 'Tobias Weidemann',
      },
      publishedAt: new Date('Wed, 14 Aug 2019 10:30:30 GMT'),
      readingTime: 3,
      imageUrl:
        'https://t3n.de/news/wp-content/uploads/2017/06/Media-saturn-ingolstadt-redcoon.jpg',
      url: 'https://t3n.de/news/mediamarkt-saturn-kaum-wachstum-1187784/',
      type: 'Ratgeber',
    },
    hero: false,
    sponsored: false,
    popular: false,
    plus: false,
    tr: false,
    isBookmarked: false,
    withImage: true,
    withTeaser: false,
    withAuthor: false,
  },
};

export default meta;
type Story = StoryObj<typeof LegacyNewsCard>;

export const feedLayout: Story = {};

export const heroLayout: Story = {
  args: { hero: true, withImage: true },
};

export const topNews: Story = {
  args: { hero: true, withImage: true, withTeaser: true, withAuthor: true },
};

export const compact: Story = {
  args: { withImage: false },
};

export const loadingFeed: Story = {
  args: { loading: true },
};

export const loadingHero: Story = {
  args: { loading: true, hero: true },
};

export const loadingCompact: Story = {
  args: { loading: true, withImage: false },
};
