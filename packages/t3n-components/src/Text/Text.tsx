import { ReactNode } from 'react';
import styled from 'styled-components';
import {
  color,
  space,
  width,
  ColorProps,
  SpaceProps,
  WidthProps
} from 'styled-system';
import { ThemeProps, composeTextStyle } from '@t3n/theme';

interface TextProps extends ColorProps, SpaceProps, WidthProps, ThemeProps {
  as?: 'p' | 'span';
  bold?: boolean;
  italic?: boolean;
  inline?: boolean;
  small?: boolean;
  children: ReactNode;
}

const font = ({ small, theme }: TextProps) =>
  composeTextStyle({ textStyle: small ? 'small' : 'regular', theme });

const fontWeight = ({ bold }: TextProps) => (bold ? 'font-weight: bold;' : '');

const fontStyle = ({ italic }: TextProps) =>
  italic ? 'font-style: italic;' : '';

const Text = styled.p.attrs(({ inline, as }: TextProps) => ({
  as: as || (inline ? 'span' : 'p')
}))<TextProps>`
  ${font}
  ${color}
  ${fontWeight}
  ${fontStyle}
  ${space}
  ${width}
`;

Text.displayName = 'Text';

Text.defaultProps = {
  color: 'brand.anthracite',
  width: 1
};

export default Text;
