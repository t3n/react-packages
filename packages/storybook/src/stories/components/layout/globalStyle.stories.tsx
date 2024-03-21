import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, GlobalStyle } from '@t3n/components';
import { ThemeBackgroundColor } from '@t3n/theme/src/theme/colors/colors';

const meta: Meta<typeof GlobalStyle> = {
  component: GlobalStyle,
  title: 'Components/Layout/GlobalStyle',
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    variant: 'primary' as ThemeBackgroundColor,
  },
  render: (args) => (
    <>
      <GlobalStyle {...args} />
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        Lorem ipsum dolor sit amet
      </Box>
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof GlobalStyle>;

export const globalStyle: Story = {};
