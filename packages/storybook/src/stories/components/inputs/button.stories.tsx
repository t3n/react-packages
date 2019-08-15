import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button, Grid, GridItem, Section } from '@t3n/components';
import { ButtonColors } from '@t3n/components/src/Button/Button';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { SectionVariants } from '@t3n/components/src/Section/Section';
import StoryContainer from '../../../components/StoryContainer';

const colors: ButtonColors[] = ['light', 'dark'];

storiesOf('Components|Inputs/Button', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .addDecorator(withKnobs)
  .add(
    'Editor',
    () => (
      <Section
        variant={select<SectionVariants>(
          'Section Farbe',
          ['highlight', 'inverse', 'primary', 'secondary'],
          'primary',
          'Section'
        )}
      >
        <Button
          inverse={boolean('Invertiert?', false, 'Button')}
          wide={boolean('Volle breite?', false, 'Button')}
          secondary={boolean('Als "Secondary"?', false, 'Button')}
          small={boolean('Kleine Schrift', false, 'Button')}
          color={select<ButtonColors>('Farbe', colors, 'light', 'Button')}
          disabled={boolean('Gesperrt?', false, 'Button')}
        >
          {text('Text', 'Button Test', 'Button')}
        </Button>
      </Section>
    ),
    {
      options: {
        showPanel: true
      }
    }
  )
  .add(
    'Variants',
    () => (
      <div>
        {colors.map(color => {
          return (
            <>
              <h3>Buttons in der Farbe {color}</h3>
              <Grid mb={4}>
                <GridItem width="33">
                  <Button color={color}>Default</Button>
                </GridItem>
                <GridItem width="33">
                  <Button color={color} rounded={false} secondary>
                    Sekundärer Button
                  </Button>
                </GridItem>
                <GridItem width="33">
                  <Button color={color} rounded>
                    Abgerundet
                  </Button>
                </GridItem>
                <GridItem width="33">
                  <Button color={color} inverse>
                    Invertiert
                  </Button>
                </GridItem>
              </Grid>
            </>
          );
        })}
      </div>
    ),
    {
      options: {
        showPanel: true
      }
    }
  );
