import React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs';
import { PageFooter } from '@t3n/components';

storiesOf('Components|Layout/PageFooter', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => (
      <div>
        <PageFooter contactLink="mailto:hi@t3n.de" />
      </div>
    ),
    {
      options: {
        showPanel: true
      }
    }
  );
