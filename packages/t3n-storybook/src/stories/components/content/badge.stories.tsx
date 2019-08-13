import React from 'react';

import { storiesOf } from '@storybook/react';
import { Badge, Heading, Grid, GridItem } from '@t3n/components';
import { withKnobs, text } from '@storybook/addon-knobs';

import { ThemeConsumer } from 'styled-components';
import { ThemeBackgroundColors } from '@t3n/theme/src/theme/colors/colors';
import StoryContainer from '../../../components/StoryContainer';

storiesOf('Components|Content/Badge', module)
  .addDecorator(withKnobs)
  .add(
    'Badges',
    () => (
      <StoryContainer>
        <ThemeConsumer>
          {theme => {
            const colors = Object.keys(
              theme.colors.background
            ) as ThemeBackgroundColors[];

            const badgeText = text('Badge Text', 'Ratgeber');

            return (
              <>
                <Heading as="h3">Kleine Badges</Heading>
                <Grid wide>
                  {colors.map(c => (
                    <GridItem key={c} width={1 / colors.length}>
                      <Badge small bgColor={c}>
                        {badgeText}
                      </Badge>
                    </GridItem>
                  ))}
                </Grid>

                <Heading as="h3">Abgerundet</Heading>
                <Grid wide>
                  {colors.map(c => (
                    <GridItem key={c} width={1 / colors.length}>
                      <Badge small rounded bgColor={c}>
                        {badgeText}
                      </Badge>
                    </GridItem>
                  ))}
                </Grid>

                <Heading as="h3">Große Badges</Heading>
                <Grid wide>
                  {colors.map(c => (
                    <GridItem key={c} width={1 / colors.length}>
                      <Badge small={false} bgColor={c}>
                        {badgeText}
                      </Badge>
                    </GridItem>
                  ))}
                </Grid>

                <Heading as="h3">Abgerundet</Heading>
                <Grid wide>
                  {colors.map(c => (
                    <GridItem key={c} width={1 / colors.length}>
                      <Badge small={false} bgColor={c}>
                        {badgeText}
                      </Badge>
                    </GridItem>
                  ))}
                </Grid>
              </>
            );
          }}
        </ThemeConsumer>
      </StoryContainer>
    ),
    {
      options: {
        showPanel: true
      }
    }
  );
