import React from 'react';
import { done, inc, start } from 'nprogress';

import {
  Box,
  Button,
  NProgressBarGlobalStyle,
  PageLayout,
} from '@t3n/components';

export default {
  title: 'Components/Layout/NProgressBar',
  component: NProgressBarGlobalStyle,
};

const ButtonGroup: React.FC = () => (
  <Box display="flex" mt={3} my={3}>
    <Button variant="secondary" onClick={() => start()} mr={2}>
      Start
    </Button>
    <Button variant="secondary" onClick={() => inc()} mr={2}>
      Inkrement
    </Button>
    <Button variant="secondary" onClick={() => done()} mr={2}>
      Done
    </Button>
  </Box>
);

export const defaultStory = () => (
  <>
    <NProgressBarGlobalStyle barColor="red" />
    <ButtonGroup />
  </>
);

defaultStory.story = {
  name: 'Default',
};

export const headerStory = () => (
  <PageLayout>
    <Box position="relative">
      <NProgressBarGlobalStyle barColor="white" />
    </Box>
    <ButtonGroup />
  </PageLayout>
);

headerStory.story = {
  name: 'Mit Header',
};
