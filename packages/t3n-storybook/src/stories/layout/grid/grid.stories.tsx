import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { space } from 'styled-system';

import { Grid, Item } from '@t3n/components';

import StoryContainer from '../../../components/StoryContainer';

const ItemContent = styled.div`
  background-color: ${({ theme }) => theme.colors.brand.greyLight};
  ${({ theme }) => space({ p: 2, theme })};
  text-align: center;
`;

storiesOf('Layout|Grid', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .add('Default', () => (
    <Grid mb={-2}>
      {new Array(6).fill('').map((_, i) =>
        new Array(i + 1).fill('').map((__, j) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Item key={`${i}${j}`} mb={2} width={1 / (i + 1)}>
              <ItemContent>1 / {i + 1}</ItemContent>
            </Item>
          );
        })
      )}
    </Grid>
  ));
