const buttonStyles = {
  primary: {
    light: {
      regular: {
        default: {
          color: 'brand.anthracite',
          bg: 'background.lighter',
          borderColor: 'transparent'
        },
        hover: {
          color: 'brand.white',
          bg: 'background.highlight',
          borderColor: 'transparent'
        }
      },
      inverse: {
        default: {
          color: 'brand.anthracite',
          bg: 'background.primary',
          borderColor: 'transparent'
        },
        hover: {
          color: 'brand.white',
          bg: 'background.highlight',
          borderColor: 'transparent'
        }
      }
    },
    dark: {
      regular: {
        default: {
          color: 'brand.white',
          bg: 'background.inverse',
          borderColor: 'transparent'
        },
        hover: {
          color: 'brand.white',
          bg: 'background.highlight',
          borderColor: 'transparent'
        }
      },
      inverse: {
        default: {
          color: 'brand.white',
          bg: 'brand.black',
          borderColor: 'transparent'
        },
        hover: {
          color: 'brand.white',
          bg: 'background.highlight',
          borderColor: 'transparent'
        }
      }
    }
  },
  secondary: {
    regular: {
      default: {
        color: 'brand.anthracite',
        bg: 'transparent',
        borderColor: 'brand.anthracite'
      },
      hover: {
        color: 'brand.white',
        bg: 'background.inverse',
        borderColor: 'brand.anthracite'
      }
    },
    inverse: {
      default: {
        color: 'brand.white',
        bg: 'transparent',
        borderColor: 'brand.white'
      },
      hover: {
        color: 'brand.anthracite',
        bg: 'background.primary',
        borderColor: 'brand.white'
      }
    }
  }
};

export default buttonStyles;
