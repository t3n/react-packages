import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';
import { ThemeConsumer } from 'styled-components';
import { parseToRgb } from 'polished';
import { Card, CardHeader, Heading, Text, Grid, Item } from '@t3n/components';
import StoryContainer from '../../../components/StoryContainer';
import colorsMd from './colors.md';

storiesOf('Style|Colors', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .add('Einleitung', doc(colorsMd))
  .add('Brand', () => (
    <ThemeConsumer>
      {theme => (
        <Grid my={-1}>
          {Object.keys(theme.colors.brand).map(name => {
            const value = theme.colors.brand[name];
            const rgb = parseToRgb(theme.colors.brand[name]);

            return (
              <Item key={name} width={[1, 1 / 3, 1 / 4]} my={1}>
                <Card>
                  <CardHeader ratio={3 / 2} bg={value} />
                  <Heading is="h3" my={0}>
                    {name}
                  </Heading>
                  <Text mb={0}>
                    <strong>{value}</strong>
                    <br />
                    {Object.keys(rgb).map(colorName => (
                      <span
                        key={colorName}
                        style={{
                          display: 'inline-flex',
                          width: '100%',
                          justifyContent: 'space-between'
                        }}
                      >
                        <strong style={{ flex: 1 }}>
                          {colorName[0].toUpperCase()}:
                        </strong>{' '}
                        <span strong style={{ flex: 4 }}>
                          {rgb[colorName]}
                        </span>
                        <br />
                      </span>
                    ))}
                  </Text>
                </Card>
              </Item>
            );
          })}
        </Grid>
      )}
    </ThemeConsumer>
  ));
