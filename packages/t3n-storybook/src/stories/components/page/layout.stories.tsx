import React from 'react';
import { storiesOf } from '@storybook/react';

import PageHeaderReadme from '@t3n/components/src/PageHeader/PageHeader.md';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { PageLayout } from '@t3n/components';

storiesOf('Components|Layout/Page', module)
  .addParameters({ readme: { sidebar: PageHeaderReadme } })
  .addDecorator(withKnobs)
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
