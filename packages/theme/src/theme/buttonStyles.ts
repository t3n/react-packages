export interface ThemeButtonColorSet {
  color: string;
  bg: string;
  borderColor: string;
}

export interface ThemeButtonStyle {
  default: ThemeButtonColorSet;
  hover: ThemeButtonColorSet;
}

export interface ThemeButtonStyles {
  color: {
    default: ThemeButtonStyle;
    inverse: ThemeButtonStyle;
    highlight: ThemeButtonStyle;
    red: ThemeButtonStyle;
  };
}

const buttonStyles = {
  color: {
    default: {
      default: {
        color: 'text.inverse',
        bg: 'shades.grey42',
        borderColor: 'shades.grey42',
      },
      hover: {
        color: 'text.inverse',
        bg: 'background.highlight',
        borderColor: 'background.highlight',
      },
    },
    inverse: {
      default: {
        color: 'text.primary',
        bg: 'background.primary',
        borderColor: 'background.primary',
      },
      hover: {
        color: 'text.inverse',
        bg: 'background.highlight',
        borderColor: 'background.highlight',
      },
    },
    highlight: {
      default: {
        color: 'text.primary',
        bg: 'background.primary',
        borderColor: 'background.primary',
      },
      hover: {
        color: 'text.inverse',
        bg: 'background.inverse',
        borderColor: 'background.inverse',
      },
    },
    red: {
      default: {
        color: 'text.inverse',
        bg: 'background.highlight',
        borderColor: 'background.highlight',
      },
      hover: {
        color: 'text.inverse',
        bg: 'background.inverse',
        borderColor: 'background.inverse',
      },
    },
  },
};

export default buttonStyles;
