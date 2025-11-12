import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  width,
  WidthProps,
} from 'styled-system';

import { composeTextStyle, ThemeProps } from '@t3n/theme';

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

const StyledText = styled.p.withConfig({
  shouldForwardProp: (prop) =>
    !['bold', 'italic', 'inline', 'small', 'secondary', 'align'].includes(prop),
})<TextProps>`
  ${textStyle}
`;

const Text: React.FC<TextProps> = ({ inline, as, ...props }) => (
  <StyledText as={as || (inline ? 'span' : 'p')} {...props} />
);

export default Text;
