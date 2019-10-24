import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import {
  variant,
  color,
  TextColorProps,
  BackgroundColorProps,
  SpaceProps
} from 'styled-system';
import { textStyle, TextProps } from '../Text/Text';

export type LinkVariantType = 'primary' | 'secondary' | 'highlight' | 'inverse';

export interface LinkProps extends TextColorProps, SpaceProps {
  small?: TextProps['small'];
  disabled?: boolean;
  children: ReactNode;
  variant?: LinkVariantType;
}

export type LinkState = 'default' | 'hover' | 'focus' | 'visited';

export interface LinkStateStyle extends TextColorProps {
  underlineColor: BackgroundColorProps['bg'];
}

export interface LinkStyle {
  default: LinkStateStyle;
  hover: LinkStateStyle;
  focus: LinkStateStyle;
  visited: LinkStateStyle;
}

export const createLinkStyle = (linkStyleConfig: LinkStyle) => css`
  ${({ theme }) => color({ color: linkStyleConfig.default.color, theme })}

  &:after {
    ${({ theme }) =>
      color({
        bg: linkStyleConfig.default.underlineColor,
        theme
      })}
  }

  &:hover {
    ${({ theme }) => color({ color: linkStyleConfig.hover.color, theme })}

    &:after {
      ${({ theme }) =>
        color({
          bg: linkStyleConfig.hover.underlineColor,
          theme
        })}
    }
  }

  &:focus {
    ${({ theme }) => color({ color: linkStyleConfig.focus.color, theme })}

    &:after {
      ${({ theme }) =>
        color({
          bg: linkStyleConfig.focus.underlineColor,
          theme
        })}
    }
  }

  &:visited {
    ${({ theme }) => color({ color: linkStyleConfig.visited.color, theme })}

    &:after {
      ${({ theme }) =>
        color({
          bg: linkStyleConfig.visited.underlineColor,
          theme
        })}
    }
  }
`;

export const linkStyle = css<LinkProps>`
  text-decoration: none;
  position: relative;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${({ disabled }) => disabled && 'none'};
  opacity: ${({ disabled }) => disabled && '0.5'};

  ${() =>
    variant({
      variants: {
        primary: {
          color: 'text.primary'
        },
        secondary: {
          color: 'text.primary'
        },
        inverse: {
          color: 'text.inverse'
        },
        highlight: {
          color: 'text.inverse'
        }
      }
    })}

  &::after {
    display: ${({ disabled }) => disabled && 'none'};
    position: absolute;
    left: 0;
    top: calc(50% + 9px);
    height: 1px;
    width: 100%;
    content: ' ';

    ${({ theme }) =>
      variant({
        variants: {
          primary: {
            background: theme.colors.text.secondary
          },
          secondary: {
            background: theme.colors.text.primary
          },
          inverse: {
            background: theme.colors.shades.grey143
          },
          highlight: {
            background: theme.colors.text.inverse
          }
        }
      })}
  }

  &:hover {
    &::after {
      ${({ theme }) =>
        variant({
          variants: {
            primary: {
              background: theme.colors.background.highlight
            },
            secondary: {
              background: theme.colors.background.highlight
            },
            inverse: {
              background: theme.colors.background.highlight
            },
            highlight: {
              background: theme.colors.background.inverse
            }
          }
        })}
    }
  }

  &:focus {
    ${() =>
      variant({
        variants: {
          primary: {
            color: 'text.highlight'
          },
          secondary: {
            color: 'text.highlight'
          },
          inverse: {
            color: 'text.highlight'
          },
          highlight: {
            color: 'text.primary'
          }
        }
      })}

    &::after {
      ${({ theme }) =>
        variant({
          variants: {
            primary: {
              background: theme.colors.background.highlight
            },
            secondary: {
              background: theme.colors.background.highlight
            },
            inverse: {
              background: theme.colors.background.highlight
            },
            highlight: {
              background: theme.colors.background.inverse
            }
          }
        })}
    }
  }
`;

export const Link = styled.a<LinkProps>`
  ${linkStyle};
  ${textStyle};
`;

Link.defaultProps = {
  variant: 'primary'
};
