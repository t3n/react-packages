import React, { useState } from 'react';
import { Slider, Heading, Grid, GridItem } from '@t3n/components';
import { theme } from '@t3n/theme';
import { ThemeColors } from '@t3n/theme/src/theme/colors/colors';

export default {
  title: 'Components|Content/Slider',
  component: Slider
};

export const defaultStory = () => {
  return (
    <div>
      <Slider name="slider" minValue={1} maxValue={5} initialValue={2} />
    </div>
  );
};

defaultStory.story = {
  name: 'Default'
};

export const customMinMaxWithStepsStory = () => {
  return (
    <div>
      <Slider
        name="slider"
        minValue={0}
        maxValue={10}
        steps={2}
        initialValue={0}
        labels={['0', '', '4', '', '8']}
      />
    </div>
  );
};

customMinMaxWithStepsStory.story = {
  name: 'Minimum und maximum Werte in definierten Schritten'
};

export const customHighlightColorStory = () => {
  const colors = (theme.colors as unknown) as ThemeColors;
  return (
    <Grid>
      <GridItem>
        <Heading as="h3" mt={0}>
          Default Pointer (rot)
        </Heading>
        <Slider name="slider" minValue={1} maxValue={5} initialValue={2} />
      </GridItem>
      <GridItem>
        <Heading as="h3" mt={0}>
          Schwarzer Pointer
        </Heading>
        <Slider
          name="slider"
          minValue={1}
          maxValue={5}
          initialValue={2}
          highlightColor={colors.brand.black as (ThemeColors & string)}
        />
      </GridItem>
      <GridItem>
        <Heading as="h3" mt={0}>
          Grüner Pointer
        </Heading>
        <Slider
          name="slider"
          minValue={1}
          maxValue={5}
          initialValue={2}
          highlightColor={colors.feedback.success as (ThemeColors & string)}
        />
      </GridItem>
    </Grid>
  );
};

customHighlightColorStory.story = {
  name: 'Angepasste Farben der Pointer'
};

export const withOnChangeStory = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedValue, setSelectedValue] = useState(5);
  const handleOnChange = (value: number) => {
    setSelectedValue(value);
  };

  return (
    <Grid>
      <GridItem>
        <Slider
          name="slider"
          initialValue={5}
          minValue={3}
          maxValue={20}
          tracks={[
            { label: '3 €', value: 3, showLabel: true },
            { label: '5 €', value: 5, showLabel: true },
            { label: '10 €', value: 10, showLabel: true },
            { label: '20 €', value: 20, showLabel: true }
          ]}
          onChange={handleOnChange}
        />
        <p>
          <strong>Your selected value:</strong> {selectedValue}
        </p>
      </GridItem>
    </Grid>
  );
};

withOnChangeStory.story = {
  name: 'Slider mit Tracks als Schritte und eine Funktion zur Ausgabe'
};
