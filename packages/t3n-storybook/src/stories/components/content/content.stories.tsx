import React from 'react';
import { storiesOf } from '@storybook/react';

import ContentReadme from '@t3n/components/src/Content/CONTENT.md';
import { Content } from '@t3n/components';

storiesOf('Components|Layout/Content', module)
  .addParameters({
    readme: {
      sidebar: ContentReadme
    }
  })
  .add('Default', () => <Content>Hello</Content>, {
    options: {
      showPanel: true
    }
  });
