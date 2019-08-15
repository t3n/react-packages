const buttonStyles = {
  primary: {
    light: {
      regular: {
        default: {
          color: 'text.primary',
          bg: 'background.secondary',
          borderColor: ''
        },
        hover: {
          color: 'text.inverse',
          bg: 'background.highlight',
          borderColor: ''
        }
      },
      inverse: {
        default: {
          color: 'text.primary',
          bg: 'background.primary',
          borderColor: ''
        },
        hover: {
          color: 'text.inverse',
          bg: 'background.highlight',
          borderColor: ''
        }
      }
    },
    dark: {
      regular: {
        default: {
          color: 'text.inverse',
          bg: 'background.inverse',
          borderColor: ''
        },
        hover: {
          color: 'text.inverse',
          bg: 'background.highlight',
          borderColor: ''
        }
      },
      inverse: {
        default: {
          color: 'text.inverse',
          bg: 'brand.black',
          borderColor: ''
        },
        hover: {
          color: 'text.inverse',
          bg: 'background.highlight',
          borderColor: ''
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
