import React from 'react';
import { select } from '@storybook/addon-knobs';

import { Box, GlobalStyle } from '@t3n/components';

export default {
  title: 'Components/Layout/GlobalStyle',
  component: GlobalStyle,
};

export const defaultStory = () => (
  <>
    <GlobalStyle
      variant={select(
        'Variante',
        {
          Primary: 'primary',
          Secondary: 'secondary',
          Highlight: 'highlight',
          inverse: 'inverse',
        },
        'primary'
      )}
    />
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      Lorem ipsum dolor sit amet
    </Box>
  </>
);

defaultStory.story = {
  name: 'Default',
};
