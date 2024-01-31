import { TextColorProps } from 'styled-system';

export interface LinkStateStyle extends TextColorProps {
  underlineColor: string;
}

export interface LinkStyle {
  default: LinkStateStyle;
  hover: LinkStateStyle;
  focus: LinkStateStyle;
  visited: LinkStateStyle;
}

export interface ThemeLinkStyles {
  primary: LinkStyle;
  secondary: LinkStyle;
  inverse: LinkStyle;
  highlight: LinkStyle;
}

const primaryLinkStyles: LinkStyle = {
  default: {
    color: 'text.primary',
    underlineColor: 'shades.grey95',
  },
  hover: {
    color: 'text.primary',
    underlineColor: 'text.highlight',
  },
  focus: {
    color: 'text.highlight',
    underlineColor: 'text.highlight',
  },
  visited: {
    color: 'text.primary',
    underlineColor: 'shades.grey95',
  },
};

const secondaryLinkStyles: LinkStyle = {
  default: {
    color: 'text.primary',
    underlineColor: 'text.primary',
  },
  hover: {
    color: 'text.primary',
    underlineColor: 'text.highlight',
  },
  focus: {
    color: 'text.highlight',
    underlineColor: 'text.highlight',
  },
  visited: {
    color: 'text.primary',
    underlineColor: 'text.primary',
  },
};

const highlightLinkStyles: LinkStyle = {
  default: {
    color: 'text.inverse',
    underlineColor: 'text.inverse',
  },
  hover: {
    color: 'text.inverse',
    underlineColor: 'text.primary',
  },
  focus: {
    color: 'text.primary',
    underlineColor: 'text.primary',
  },
  visited: {
    color: 'text.inverse',
    underlineColor: 'text.inverse',
  },
};

const inverseLinkStyles: LinkStyle = {
  default: {
    color: 'text.inverse',
    underlineColor: 'shades.grey95',
  },
  hover: {
    color: 'text.inverse',
    underlineColor: 'text.highlight',
  },
  focus: {
    color: 'text.highlight',
    underlineColor: 'text.highlight',
  },
  visited: {
    color: 'text.inverse',
    underlineColor: 'shades.grey95',
  },
};

const linkStyles = {
  primary: primaryLinkStyles,
  secondary: secondaryLinkStyles,
  highlight: highlightLinkStyles,
  inverse: inverseLinkStyles,
};

export default linkStyles;
