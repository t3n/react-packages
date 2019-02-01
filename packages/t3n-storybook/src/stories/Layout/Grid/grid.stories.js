import React from 'react';
import { storiesOf } from '@storybook/react';

import { Grid, GridItem as Item } from '@t3n/components';

storiesOf('Layout/Grid', module).add('Default', () => (
  <Grid>
    <Item width={1 / 2}>Hello</Item>
    <Item width={1 / 2}>World</Item>
    <Item width={1 / 2}>Hello</Item>
    <Item width={1 / 2}>World</Item>
  </Grid>
));
