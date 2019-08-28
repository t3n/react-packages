import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { color, TextColorProps } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import { Text, TextProps } from '../Text/Text';

export type LinkVariantType = 'primary' | 'secondary' | 'highlight' | 'inverse';
export type LinkUnderlineType = 'none' | 'hover' | 'always';

export interface LinkProps
  extends TextColorProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
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

export const Link = styled(Text).attrs(() => ({ as: 'a' }))<LinkProps>`
  ${linkStyle};
`;
