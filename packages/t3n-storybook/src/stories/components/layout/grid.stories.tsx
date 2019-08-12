import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { space } from 'styled-system';

import { Grid, GridItem } from '@t3n/components';
import { ThemeProps } from '@t3n/theme';

import StoryContainer from '../../../components/StoryContainer';

const GridItemContent = styled.div`
  background-color: ${({ theme }: ThemeProps) =>
    theme.colors.background.secondary};
  ${({ theme }: ThemeProps) => space({ p: 2, theme })};
  text-align: center;
`;

storiesOf('Components|Layout/Grid', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .add(
    'Default',
    () => (
      <Grid mb={-2}>
        {new Array(6).fill('').map((_, i) =>
          new Array(i + 1).fill('').map((__, j) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <GridItem key={`${i}${j}`} mb={2} width={1 / (i + 1)}>
                <GridItemContent>1 / {i + 1}</GridItemContent>
              </GridItem>
            );
          })
        )}
      </Grid>
    ),
    {
      options: {
        showPanel: true
      }
    }
  );
