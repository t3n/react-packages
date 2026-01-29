import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';
import { space } from 'styled-system';

import { Grid, GridItem } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

const GridItemContent = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  ${({ theme }) => space({ p: 2, theme })};
  text-align: center;
`;

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: 'Components/Layout/Grid',
  decorators: [storyContainerDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    reverse: false,
    vertical: false,
    wide: false,
    children: new Array(6).fill('').map((_, i) =>
      new Array(i + 1).fill('').map((__, j) => {
        return (
          // eslint-disable-next-line @eslint-react/no-array-index-key
          <GridItem key={`${i}${j}`} mb={2} width={1 / (i + 1)}>
            <GridItemContent>1 / {i + 1}</GridItemContent>
          </GridItem>
        );
      }),
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const grid: Story = {};
