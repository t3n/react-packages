import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import {
  color,
  space,
  width,
  textAlign,
  ColorProps,
  SpaceProps,
  WidthProps,
  TextAlignProps,
} from 'styled-system';
import { ThemeProps, composeTextStyle } from '@t3n/theme';

export interface TextProps extends ColorProps, SpaceProps, WidthProps {
  as?: 'p' | 'span';
  bold?: boolean;
  italic?: boolean;
  inline?: boolean;
  small?: boolean;
  secondary?: boolean;
  align?: TextAlignProps['textAlign'];
  children: ReactNode;
}

const font = ({ small, theme }: TextProps & ThemeProps) =>
  composeTextStyle({ textStyle: small ? 'small' : 'regular', theme });

const fontWeight = ({ bold }: TextProps) => (bold ? 'font-weight: bold;' : '');

const fontStyle = ({ italic }: TextProps) =>
  italic ? 'font-style: italic;' : '';

const textColor = ({
  color: colorProp,
  secondary,
  theme,
}: TextProps & ThemeProps) =>
  color({ color: secondary ? 'text.secondary' : colorProp, theme });

const align = ({ align: alignProp, theme }: TextProps & ThemeProps) =>
  textAlign({ textAlign: alignProp, theme });

export const textStyle = css<TextProps>`
  ${font}
  ${textColor}
  ${fontWeight}
  ${fontStyle}
  ${space}
  ${width}
  ${align}
`;

export const Text = styled.p.attrs(({ inline, as }: TextProps) => ({
  as: as || (inline ? 'span' : 'p'),
}))<TextProps>`
  ${textStyle}
`;
