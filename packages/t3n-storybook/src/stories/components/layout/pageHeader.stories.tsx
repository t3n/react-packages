import React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs';
import { PageHeader } from '@t3n/components';

storiesOf('Components|Layout/PageHeader', module)
  .addDecorator(withKnobs)
  .add('Default', () => <PageHeader />)
  .add('Mit Usermenü', () => <PageHeader />);
