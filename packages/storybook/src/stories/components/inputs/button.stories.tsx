import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  select,
  boolean,
  number
} from '@storybook/addon-knobs';

import { Button, LinkButton, Grid, GridItem, Section } from '@t3n/components';
import { ButtonColors } from '@t3n/components/src/Button/Button';
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
          width={number(
            'Breite',
            0.3,
            { range: true, min: 0, max: 1, step: 0.1 },
            'Button'
          )}
          secondary={boolean('Als "Secondary"?', false, 'Button')}
          small={boolean('Kleine Schrift', false, 'Button')}
          color={select<ButtonColors>('Farbe', colors, 'light', 'Button')}
          disabled={boolean('Gesperrt?', false, 'Button')}
          loading={boolean('Lade-Status?', false, 'Button')}
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
                <GridItem width={1 / 3} padding={2}>
                  <Button color={color}>Default</Button>
                </GridItem>
                <GridItem width={1 / 3} padding={2}>
                  <Button color={color} rounded={false} secondary>
                    Sekundärer Button
                  </Button>
                </GridItem>
                <GridItem width={1 / 3} padding={2}>
                  <Button color={color} rounded>
                    Abgerundet
                  </Button>
                </GridItem>
              </Grid>
              <Grid mb={4}>
                <GridItem width={1 / 3} padding={2}>
                  <Button color={color} inverse>
                    Invertiert
                  </Button>
                </GridItem>
                <GridItem width={1 / 3} padding={2}>
                  <Button color={color} loading inverse>
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
  )
  .add(
    'Link',
    () => (
      <LinkButton href="https://www.t3n.de" target="_blank">
        Weiter zu t3n.de
      </LinkButton>
    ),
    {
      options: {
        showPanel: true
      }
    }
  );
