import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeConsumer } from 'styled-components';
import { parseToRgb } from 'polished';
import { Card, CardHeader, Headline, Text, Grid, Item } from '@t3n/components';
import StoryContainer from '../../components/StoryContainer';

storiesOf('Colors', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .add('All', () => (
    <ThemeConsumer>
      {theme => (
        <Grid narrow>
          {Object.keys(theme.colors.brand).map(name => {
            const value = theme.colors.brand[name];
            const rgb = parseToRgb(theme.colors.brand[name]);

            return (
              <Item key={name} width={[1 / 2, 1 / 3, 1 / 4]} mb={[6]}>
                <Card elevate>
                  <CardHeader ratio={3 / 2} bg={value} />
                  <Headline is="h3" my={0}>
                    {name}
                  </Headline>
                  <Text mb={0}>
                    <strong>{value}</strong>
                    <br />
                    {Object.keys(rgb).map(colorName => (
                      <span
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
