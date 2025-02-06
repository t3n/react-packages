import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Grid, GridItem, UserCard } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof UserCard> = {
  component: UserCard,
  title: 'Components/Cards/UserCard',
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
    user: {
      id: 1,
      name: 'Arabella Lauer',
      avatarUrl:
        'https://images.unsplash.com/photo-1565588668820-6f19adba4646?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9',
      email: 'beispiel@t3n.de',
      position: 'Head of Marketing',
      phone: '01234/567890',
      flag: '',
      socialLinks: [
        {
          url: 'https://de.linkedin.com/company/t3n-magazin-yeebase-media-gmbh',
          type: 'LINKEDIN',
        },
        {
          url: 'https://twitter.com/t3n',
          type: 'TWITTER',
        },
        {
          url: 'https://www.xing.com/pages/t3nmagazin-yeebasemediagmbh',
          type: 'XING',
        },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserCard>;

export const userCard: Story = {};
