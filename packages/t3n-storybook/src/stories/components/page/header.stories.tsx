import React from 'react';
import { storiesOf } from '@storybook/react';

import PageHeaderReadme from '@t3n/components/src/PageHeader/PageHeader.md';
import { withKnobs } from '@storybook/addon-knobs';
import { PageHeader } from '@t3n/components';

storiesOf('Components|Layout/Page', module)
  .addParameters({ readme: { sidebar: PageHeaderReadme } })
  .addDecorator(withKnobs)
  .add('Header', () => <PageHeader />);
