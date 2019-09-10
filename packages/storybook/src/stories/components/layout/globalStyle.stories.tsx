import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { GlobalStyle, Box } from '@t3n/components';

storiesOf('Components|Layout/GlobalStyle', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => (
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
    ),
    {
      options: {
        showPanel: true
      }
    }
  );
