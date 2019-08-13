import { create } from '@storybook/theming';
import logo from './Logo.svg';

import { theme } from '@t3n/theme';

export default create({
  brandUrl: 'https://t3n.de',
  brandTitle: 't3n - storybook',
  brandImage: logo,

  appBg: theme.colors.background.secondary,
  appContentBg: '#fff',

  textColor: theme.colors.text.primary
});
