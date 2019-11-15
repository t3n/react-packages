import React from 'react';
import {
  Punchline,
  Grid,
  GridItem,
  VisualSection,
  Box,
  Heading
} from '@t3n/components';
import { withKnobs } from '@storybook/addon-knobs';
import { storyContainerContentDecorator } from '../../../../utils/decorators';

export default {
  title: 'Components|Typografie/Punchline',
  component: Text
};

export const defaultStory = () => <Punchline>Punchline</Punchline>;

defaultStory.story = {
  name: 'Default',
  decorators: [withKnobs, storyContainerContentDecorator]
};

export const variantStory = () => (
  <>
    <Heading as="h3" ml={3}>
      Punchline 50% width
    </Heading>
    <Grid>
      <GridItem width={[1, 1, 1 / 2, 1 / 2]}>
        <Box ml={4}>
          <Punchline>Test für Punchline mit Zeilenumbruch</Punchline>
        </Box>
      </GridItem>
    </Grid>
    <Heading as="h3" ml={3} mt={8}>
      Punchline in Visual-Section 100% width
    </Heading>
    <Grid>
      <GridItem width={[1]}>
        <VisualSection variant="highlight" innerGap={9}>
          <Box ml={3}>
            <Punchline>Test für Punchline in Visual-Section</Punchline>
          </Box>
        </VisualSection>
      </GridItem>
    </Grid>
  </>
);

variantStory.story = {
  name: 'Varianten'
};
