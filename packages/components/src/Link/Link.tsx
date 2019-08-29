import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { color, TextColorProps, SpaceProps } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import { textStyle, TextProps } from '../Text/Text';

export type LinkVariantType = 'primary' | 'secondary' | 'highlight' | 'inverse';
export type LinkUnderlineType = 'none' | 'hover' | 'always';

export interface LinkProps extends TextColorProps, SpaceProps {
  variant?: LinkVariantType;
  underline?: LinkUnderlineType;
  small?: TextProps['small'];
  hoverColor?: TextColorProps['color'];
  focusColor?: TextColorProps['color'];
  children: ReactNode;
}

type LinkStateType = 'default' | 'hover' | 'focus';

const textColor = (state: LinkStateType) => ({
  variant = 'primary',
  color: colorProp,
  theme
}: LinkProps & ThemeProps) =>
  color({
    color: colorProp || theme.linkStyles[variant][state],
    theme
  });

const underlineDefault = ({ underline = 'none' }: LinkProps) =>
  `text-decoration: ${underline === 'always' ? 'underline' : 'none'}`;

const underlineHover = ({ underline = 'none' }: LinkProps) =>
  `text-decoration: ${underline === 'none' ? 'none' : 'underline'}`;

export const linkStyle = css`
  ${textColor('default')};
  ${underlineDefault};

  &:active,
  &:visited {
    ${textColor('default')};
    ${underlineDefault};
  }

  &:hover {
    ${textColor('hover')};
    ${underlineHover};
  }

  &:focus {
    ${textColor('focus')};
    ${underlineHover};
  }
`;

export const Link = styled.a<LinkProps>`
  ${textStyle};
  ${linkStyle};
`;
