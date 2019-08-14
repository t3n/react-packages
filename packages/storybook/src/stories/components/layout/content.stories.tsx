import React from 'react';
import { storiesOf } from '@storybook/react';

import { Content } from '@t3n/components';

storiesOf('Components|Layout/Content', module).add(
  'Default',
  () => <Content>Hello</Content>,
  {
    options: {
      showPanel: true
    }
  }
);
