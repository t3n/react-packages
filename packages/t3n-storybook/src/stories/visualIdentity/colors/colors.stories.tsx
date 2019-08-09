import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';
import { ThemeConsumer } from 'styled-components';
import { parseToRgb } from 'polished';
import {
  Card,
  CardHeader,
  Heading,
  Text,
  Grid,
  GridItem,
  Section
} from '@t3n/components';
import { RgbColor, RgbaColor } from 'polished/lib/types/color';
import StoryContainer from '../../../components/StoryContainer';
import intro from './introduction.md';
import colorsMd from './colors.md';

interface ColorCardProps {
  name: string;
  value: string;
  rgb: RgbColor | RgbaColor;
}

const ColorCard = ({ name, value, rgb }: ColorCardProps) => (
  <Card>
    <CardHeader ratio={3 / 2} bg={value} />
    <Heading as="h3" my={0}>
      {name}
    </Heading>
    <Text mb={0}>
      <strong>{value}</strong>
      <br />
      {Object.entries(rgb).map(([colorName, colorValue]) => {
        return (
          <span
            key={String(colorName)}
            style={{
              display: 'inline-flex',
              width: '100%',
              justifyContent: 'space-between'
            }}
          >
            <strong style={{ flex: 1 }}>{colorName[0].toUpperCase()}:</strong>{' '}
            <span style={{ flex: 4 }}>{colorValue}</span>
            <br />
          </span>
        );
      })}
    </Text>
  </Card>
);

storiesOf('Visual Identity|Colors', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .add('Einleitung', doc(intro), {
    options: {
      showPanel: false
    }
  })
  .add(
    'Online Farben',
    () => (
      <ThemeConsumer>
        {theme => {
          return Object.keys(theme.colors).map(name => (
            <Section>
              <Heading as="h2">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Heading>

              <Grid my={-1}>
                {Object.keys(theme.colors[name]).map(colorName => {
                  const value = theme.colors[name][colorName];
                  const rgb = parseToRgb(theme.colors[name][colorName]);

                  return (
                    <GridItem key={name} width={[1, 1 / 4, 1 / 5]} my={1}>
                      <ColorCard
                        key={name}
                        name={colorName}
                        rgb={rgb}
                        value={value}
                      />
                    </GridItem>
                  );
                })}
              </Grid>
            </Section>
          ));
        }}
      </ThemeConsumer>
    ),
    {
      options: {
        showPanel: false
      }
    }
  )
  .add('Druckfarben', doc(colorsMd), {
    options: {
      showPanel: false
    }
  });
