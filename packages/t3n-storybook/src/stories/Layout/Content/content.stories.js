import React from 'react';
import { storiesOf } from '@storybook/react';

import { Content } from '@t3n/components';

storiesOf('Layout|Content', module).add('Default', () => (
  <Content>Hello</Content>
));
