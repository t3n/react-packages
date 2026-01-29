import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { done, inc, start } from 'nprogress';

import { Box, Button, NProgressBarGlobalStyle } from '@t3n/components';

const ButtonGroup = () => (
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

const meta: Meta<typeof NProgressBarGlobalStyle> = {
  component: NProgressBarGlobalStyle,
  title: 'Components/Layout/NProgressBar',
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    barColor: 'red',
  },
  render: (args) => (
    <>
      <NProgressBarGlobalStyle {...args} />
      <ButtonGroup />
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof NProgressBarGlobalStyle>;

export const progressBar: Story = {};
