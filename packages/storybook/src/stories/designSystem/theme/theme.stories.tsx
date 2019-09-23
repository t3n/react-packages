import React from 'react';

import { theme } from '@t3n/theme';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Design System|Theme',
  decorators: [storyContainerDecorator]
};

export const themeConfiguration = () => (
  <pre>{JSON.stringify(theme, null, 2)}</pre>
);
