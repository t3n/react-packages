import React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs, boolean } from '@storybook/addon-knobs';
import { PageLayout } from '@t3n/components';

storiesOf('Components|Layout/Page', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => (
      <PageLayout showHeader={boolean('Mit Header', true)}>Content</PageLayout>
    ),
    {
      options: {
        showPanel: true
      }
    }
  );
