import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import { Button, Grid, GridItem, Section } from '@t3n/components';
import { ButtonColors, ButtonAsType } from '@t3n/components/src/Button/Button';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { SectionVariants } from '@t3n/components/src/Section/Section';
import StoryContainer from '../../../components/StoryContainer';

const colors: ButtonColors[] = ['light', 'dark'];
const asType: ButtonAsType[] = ['div', 'span', 'a', 'button'];

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
          as={select<ButtonAsType>('Als', asType, 'div', 'Button')}
          color={select<ButtonColors>('Farbe', colors, 'light', 'Button')}
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
            <Fragment>
              <h3>Buttons in der Farbe {color}</h3>
              <Grid mb={4}>
                <GridItem width="33">
                  <Button
                    color={color}
                    href="https://t3n.de/"
                    onClick={() => null}
                    target="_blank"
                  >
                    Default
                  </Button>
                </GridItem>
                <GridItem width="33">
                  <Button
                    color={color}
                    rounded={false}
                    secondary
                    href="https://t3n.de/"
                    onClick={() => null}
                    target="_blank"
                  >
                    Sekundärer Button
                  </Button>
                </GridItem>
                <GridItem width="33">
                  <Button
                    color={color}
                    rounded
                    href="https://t3n.de/"
                    onClick={() => null}
                    target="_blank"
                  >
                    Abgerundet
                  </Button>
                </GridItem>
                <GridItem width="33">
                  <Button
                    color={color}
                    inverse
                    href="https://t3n.de/"
                    onClick={() => null}
                    target="_blank"
                  >
                    Invertiert
                  </Button>
                </GridItem>
              </Grid>
            </Fragment>
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
