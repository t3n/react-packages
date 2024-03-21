import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Grid, GridItem, HeroCard } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof HeroCard> = {
  component: HeroCard,
  title: 'Components/Cards/HeroArticleCard',
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
    author: 'Andreas Floemer',
    url: 'https://t3n.de/news/pixel-4-4-xl-geruechte-ausstattung-design-1186571/',
    imageUrl:
      'https://t3n.de/news/wp-content/uploads/2019/08/pixel-4-render-phone-designer.jpg',
    title: 'Google Pixel 4 und 4 XL: So sehen sie aus, das steckt wohl drin',
    publishedAt: new Date('Sat, 10 Aug 2019 07:00:04 GMT'),
  },
};

export default meta;
type Story = StoryObj<typeof HeroCard>;

export const heroCard: Story = {};
