import React from 'react';
import { storiesOf } from '@storybook/react';

import { Card } from '@t3n/components';

storiesOf('Card', module).add('Simple', () => <Card>Hello</Card>);
