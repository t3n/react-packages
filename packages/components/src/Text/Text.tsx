import React, { PropsWithChildren } from 'react';
import { css, styled } from 'styled-components';
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

export interface TextProps
  extends ColorProps, SpaceProps, WidthProps, Required<PropsWithChildren> {
  as?: 'p' | 'span';
  bold?: boolean;
  italic?: boolean;
  inline?: boolean;
  small?: boolean;
  secondary?: boolean;
  align?: TextAlignProps['textAlign'];
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
    ![
      'bold',
      'italic',
      'inline',
      'small',
      'secondary',
      'align',
      'color',
    ].includes(prop),
})<TextProps>`
  ${textStyle}
`;

const Text = ({ inline, as, color, ...props }: TextProps) => (
  <StyledText
    {...props}
    // We need to cast color to any here. When the as prop is present,
    // styled-components' polymorphic types try to merge HTMLAttributes
    // (where color: string) with ColorProps (where color: ResponsiveValue)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    color={color as any}
    as={as || (inline ? 'span' : 'p')}
  />
);

export default Text;
