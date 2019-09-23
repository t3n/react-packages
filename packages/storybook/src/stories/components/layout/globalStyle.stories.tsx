import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { GlobalStyle, Box } from '@t3n/components';

export default {
  title: 'Components|Layout/GlobalStyle',
  component: GlobalStyle,
  decorators: [withKnobs]
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
          inverse: 'inverse'
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
  name: 'Default'
};
