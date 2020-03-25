import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { parseToRgb } from 'polished';
import {
  Card,
  CardHeader,
  Heading,
  Text,
  Grid,
  GridItem,
  Section,
} from '@t3n/components';
import { RgbColor, RgbaColor } from 'polished/lib/types/color';

export default {
  title: 'Design System|Colors',
  parameters: { docs: { page: null } },
};

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
              justifyContent: 'space-between',
            }}
          >
            <strong style={{ flex: 1 }}>{colorName[0].toUpperCase()}:</strong>
            <span style={{ flex: 4 }}>{colorValue}</span>
            <br />
          </span>
        );
      })}
    </Text>
  </Card>
);

export const groups = () => (
  <ThemeConsumer>
    {(theme) => {
      return Object.keys(theme.colors).map((name, i) => {
        const headingProps: any = {};

        if (i === 0) headingProps.mt = 0;

        return (
          <Section key={name}>
            <Heading as="h2" {...headingProps}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Heading>

            <Grid my={-1}>
              {Object.keys(theme.colors[name]).map((colorName) => {
                const value = theme.colors[name][colorName];
                const rgb = parseToRgb(theme.colors[name][colorName]);

                return (
                  <GridItem key={colorName} width={[1, 1 / 3]}>
                    <ColorCard
                      key={colorName}
                      name={colorName}
                      rgb={rgb}
                      value={value}
                    />
                  </GridItem>
                );
              })}
            </Grid>
          </Section>
        );
      });
    }}
  </ThemeConsumer>
);

groups.story = {
  name: 'Gruppen',
};
