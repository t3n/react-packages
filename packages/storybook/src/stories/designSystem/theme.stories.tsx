import React from 'react';
import { Meta } from '@storybook/react';

import { theme } from '@t3n/theme';

import { storyContainerDecorator } from '../../utils/decorators';

const meta: Meta = {
  title: 'Design System/Theme',
  decorators: [storyContainerDecorator],
  parameters: { docs: { page: null } },
};

export default meta;

export const themeConfiguration = () => (
  <pre>{JSON.stringify(theme, null, 2)}</pre>
);
