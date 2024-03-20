import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Grid, GridItem, TitleCard } from '@t3n/components';
import { HeadingElements } from '@t3n/components/src/Heading';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof TitleCard> = {
  component: TitleCard,
  title: 'Components/Cards/TitleCard',
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
    titleAs: 'h3' as HeadingElements,
    title: 'Default Title',
    centerTitle: false,
    children:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
  },
};

export default meta;
type Story = StoryObj<typeof TitleCard>;

export const titleCard: Story = {};
