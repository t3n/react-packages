const buttonStyles = {
  primary: {
    light: {
      regular: {
        default: {
          color: 'text.primary',
          bg: 'background.secondary',
          borderColor: 'transparent'
        },
        hover: {
          color: 'text.inverse',
          bg: 'background.highlight',
          borderColor: 'transparent'
        }
      },
      inverse: {
        default: {
          color: 'text.primary',
          bg: 'background.primary',
          borderColor: 'transparent'
        },
        hover: {
          color: 'text.inverse',
          bg: 'background.highlight',
          borderColor: 'transparent'
        }
      }
    },
    dark: {
      regular: {
        default: {
          color: 'text.inverse',
          bg: 'background.inverse',
          borderColor: 'transparent'
        },
        hover: {
          color: 'text.inverse',
          bg: 'background.highlight',
          borderColor: 'transparent'
        }
      },
      inverse: {
        default: {
          color: 'text.inverse',
          bg: 'brand.black',
          borderColor: 'transparent'
        },
        hover: {
          color: 'text.inverse',
          bg: 'background.highlight',
          borderColor: 'transparent'
        }
      }
    }
  },
  secondary: {
    regular: {
      default: {
        color: 'text.primary',
        bg: 'transparent',
        borderColor: 'text.primary'
      },
      hover: {
        color: 'text.inverse',
        bg: 'background.inverse',
        borderColor: 'text.primary'
      }
    },
    inverse: {
      default: {
        color: 'text.inverse',
        bg: 'transparent',
        borderColor: 'text.inverse'
      },
      hover: {
        color: 'text.primary',
        bg: 'background.primary',
        borderColor: 'text.inverse'
      }
    }
  }
};

export default buttonStyles;
