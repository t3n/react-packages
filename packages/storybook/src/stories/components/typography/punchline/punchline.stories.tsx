import React from 'react';

import {
  Box,
  Grid,
  GridItem,
  Punchline,
  Section,
  VisualSection,
} from '@t3n/components';

import { storyContainerContentDecorator } from '../../../../utils/decorators';

export default {
  title: 'Components/Typografie/Punchline',
  component: Text,
};

export const defaultStory = () => <Punchline>Punchline</Punchline>;

defaultStory.storyName = 'Default';
defaultStory.decorators = [storyContainerContentDecorator];

export const lineBreakStory = () => (
  <Section variant="primary" innerGap={9}>
    <Grid>
      <GridItem>
        <Box width="500px" pl={3}>
          <Punchline>Punchline mit Zeilenumbruch</Punchline>
        </Box>
      </GridItem>
    </Grid>
  </Section>
);

lineBreakStory.storyName = 'Zeilenumbruch';

export const visualSectionStory = () => (
  <Grid>
    <GridItem width={[1]}>
      <VisualSection variant="highlight" innerGap={9}>
        <Box p={3}>
          <Punchline>Punchline in Visual-Section</Punchline>
        </Box>
      </VisualSection>
    </GridItem>
  </Grid>
);

visualSectionStory.storyName = 'Visual Section';
