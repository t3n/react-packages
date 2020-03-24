import { create } from '@storybook/theming';
import { theme } from '@t3n/theme';
import logo from './Logo.svg';

export default create({
  brandUrl: 'https://t3n.de',
  brandTitle: 't3n - storybook',
  brandImage: logo,

  appBg: theme.colors.background.secondary,
  appContentBg: '#fff',

  textColor: theme.colors.text.primary,
});
