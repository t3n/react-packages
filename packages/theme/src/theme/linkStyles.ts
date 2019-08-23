export interface ThemeLinkStyle {
  default: string;
  hover: string;
  focus: string;
}

export interface ThemeLinkStyles {
  primary: ThemeLinkStyle;
  secondary: ThemeLinkStyle;
  highlight: ThemeLinkStyle;
  inverse: ThemeLinkStyle;
}

const linkStyles = {
  primary: {
    default: 'text.primary',
    hover: 'text.highlight',
    focus: 'text.highlight'
  },
  secondary: {
    default: 'text.secondary',
    hover: 'text.primary',
    focus: 'text.primary'
  },
  highlight: {
    default: 'text.highlight',
    hover: 'text.primary',
    focus: 'text.primary'
  },
  inverse: {
    default: 'text.inverse',
    hover: 'text.highlight',
    focus: 'text.highlight'
  }
};

export default linkStyles;
