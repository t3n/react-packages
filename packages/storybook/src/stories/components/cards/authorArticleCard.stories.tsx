import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { AuthorCard, Grid, GridItem } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof AuthorCard> = {
  component: AuthorCard,
  title: 'Components/Cards/AuthorArticleCard',
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
    author: {
      name: 'Andreas Floemer',
      avatar:
        'https://storage.googleapis.com/t3n-de/neos/bc7fce93490239419c6588eef4913653b89a8af2/afr_t3n.jpg',
    },
    url: 'https://t3n.de/news/pixel-4-4-xl-geruechte-ausstattung-design-1186571/',
    title: 'Google Pixel 4 und 4 XL: So sehen sie aus, das steckt wohl drin',
    articleType: 'News',
  },
};

export default meta;
type Story = StoryObj<typeof AuthorCard>;

export const authorCard: Story = {};
