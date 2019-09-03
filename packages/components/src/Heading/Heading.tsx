import React, { ReactNode } from 'react';
import styled from 'styled-components';
import {
  space,
  size,
  textAlign,
  SpaceProps,
  SizeProps,
  TextAlignProps,
  color
} from 'styled-system';
import { ThemeProps, composeTextStyle } from '@t3n/theme';

export type HeadingElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends SpaceProps, SizeProps {
  as?: HeadingElements;
  styleAs?: HeadingElements;
  color?: string;
  align?: TextAlignProps['textAlign'];
  children?: ReactNode;
}

const font = ({ as, styleAs, theme }: HeadingProps & ThemeProps) =>
  composeTextStyle({ textStyle: styleAs || as || 'h1', theme });

const align = ({ align: alignProp, theme }: HeadingProps & ThemeProps) =>
  textAlign({ textAlign: alignProp, theme });

const textColor = ({ color: colorProp, theme }: HeadingProps & ThemeProps) =>
  color({ color: colorProp, theme });

export const Heading = styled.h1<HeadingProps>`
  ${font}
  ${space}
  ${size}
  ${align}
  ${textColor}
`;

Heading.displayName = 'Heading';

export const H1 = ({ as, ...props }: HeadingProps) => (
  <Heading as="h1" {...props} />
);
export const H2 = ({ as, ...props }: HeadingProps) => (
  <Heading as="h2" {...props} />
);
export const H3 = ({ as, ...props }: HeadingProps) => (
  <Heading as="h3" {...props} />
);
export const H4 = ({ as, ...props }: HeadingProps) => (
  <Heading as="h4" {...props} />
);
export const H5 = ({ as, ...props }: HeadingProps) => (
  <Heading as="h5" {...props} />
);
export const H6 = ({ as, ...props }: HeadingProps) => (
  <Heading as="h6" {...props} />
);
