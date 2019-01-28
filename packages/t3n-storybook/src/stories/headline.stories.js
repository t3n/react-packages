import React from 'react';
import { storiesOf } from '@storybook/react';

import { Headline } from '@t3n/components';

storiesOf('Headline', module).add('Regular', () => (
  <Headline is="h1">
    Lorem ipsum dolor sit amet consetetur sadipcing elitr
  </Headline>
));
