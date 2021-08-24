import { ReactNode } from 'react';
import btoa from 'btoa';
import styled, { css } from 'styled-components';
import { color, SpaceProps, TextColorProps } from 'styled-system';

import { getThemeColor, hexToRgb, ThemeProps } from '@t3n/theme';
import { LinkStyle } from '@t3n/theme/src/theme/linkStyles';

import { TextProps, textStyle } from '../Text/Text';

export type LinkVariantType = 'primary' | 'secondary' | 'highlight' | 'inverse';

export interface LinkProps extends TextColorProps, SpaceProps {
  small?: TextProps['small'];
  disabled?: boolean;
  variant?: LinkVariantType;
  children: ReactNode;
}

export type LinkState = 'default' | 'hover' | 'focus' | 'visited';

const underline = (rgbColor: string) =>
  `background-image: url('data:image/svg+xml;base64,${btoa(
    `<svg preserveAspectRatio="none" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg"><g stroke="${rgbColor}"><rect x="0" y="0" width="1" height="1" /></g></svg>`
  )}');`;

const underlineColor =
  (value: string) =>
  ({ theme }: ThemeProps) => {
    const c = getThemeColor(value)({ theme }) || value;

    if (/^rgb/.test(c)) return c;
    if (/^#/.test(c)) return hexToRgb(c);

    return 'rgb(255,255,255)';
  };

export const createLinkStyle = (linkStyleConfig: LinkStyle) => css<
  Omit<LinkProps, 'children'>
>`
  ${({ theme }) => color({ color: linkStyleConfig.default.color, theme })}
  ${({ theme, disabled }) =>
    disabled
      ? ''
      : underline(
          underlineColor(linkStyleConfig.default.underlineColor)({ theme })
        )}

  &:hover {
    ${({ theme }) => color({ color: linkStyleConfig.hover.color, theme })}
    ${({ theme }: ThemeProps) =>
      underline(
        underlineColor(linkStyleConfig.hover.underlineColor)({ theme })
      )}
  }

  &:focus {
    ${({ theme }) => color({ color: linkStyleConfig.focus.color, theme })}
    ${({ theme }: ThemeProps) =>
      underline(
        underlineColor(linkStyleConfig.focus.underlineColor)({ theme })
      )}
  }

  &:visited {
    ${({ theme }) => color({ color: linkStyleConfig.visited.color, theme })}
    ${({ theme }: ThemeProps) =>
      underline(
        underlineColor(linkStyleConfig.visited.underlineColor)({ theme })
      )}
    &:focus {
      ${({ theme }) => color({ color: linkStyleConfig.focus.color, theme })}
      ${({ theme }: ThemeProps) =>
        underline(
          underlineColor(linkStyleConfig.focus.underlineColor)({ theme })
        )}
    }
  }
`;

export const linkStyle = css<LinkProps>`
  text-decoration: none;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  background-repeat: repeat-x;
  background-size: 1px 1px;
  background-position: 0 100%;
  cursor: pointer;
  ${textStyle}

  ${({ variant: variantProp, theme }) => {
    switch (variantProp) {
      case 'secondary':
        return createLinkStyle(theme.linkStyles.secondary);
      case 'inverse':
        return createLinkStyle(theme.linkStyles.inverse);
      case 'highlight':
        return createLinkStyle(theme.linkStyles.highlight);
      default:
        return createLinkStyle(theme.linkStyles.primary);
    }
  }}
`;

export const Link = styled.a<LinkProps>`
  ${linkStyle}
`;

Link.defaultProps = {
  variant: 'primary',
};
