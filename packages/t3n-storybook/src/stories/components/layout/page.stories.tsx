import React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs, boolean } from '@storybook/addon-knobs';
import { PageHeader, PageLayout } from '@t3n/components';

storiesOf('Components|Layout/Page', module)
  .addDecorator(withKnobs)
  .add('Header', () => <PageHeader />)
  .add(
    'Layout',
    () => (
      <PageLayout showHeader={boolean('Mit Header', true)}>Content</PageLayout>
    ),
    {
      options: {
        showPanel: true
      }
    }
  );
