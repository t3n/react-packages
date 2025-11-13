import React, { ReactNode } from 'react';
import styled from 'styled-components';
import {
  color,
  size,
  SizeProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
} from 'styled-system';

import { composeTextStyle, ThemeProps } from '@t3n/theme';

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

const Heading = styled.h1.withConfig({
  shouldForwardProp: (prop) => !['styleAs', 'align'].includes(prop),
})<HeadingProps>`
  ${font}
  ${space}
  ${size}
  ${align}
  ${textColor}
`;

Heading.displayName = 'Heading';

export const H1 = ({ ...props }: Omit<HeadingProps, 'as'>) => (
  <Heading as="h1" {...props} />
);
export const H2 = ({ ...props }: Omit<HeadingProps, 'as'>) => (
  <Heading as="h2" {...props} />
);
export const H3 = ({ ...props }: Omit<HeadingProps, 'as'>) => (
  <Heading as="h3" {...props} />
);
export const H4 = ({ ...props }: Omit<HeadingProps, 'as'>) => (
  <Heading as="h4" {...props} />
);
export const H5 = ({ ...props }: Omit<HeadingProps, 'as'>) => (
  <Heading as="h5" {...props} />
);
export const H6 = ({ ...props }: Omit<HeadingProps, 'as'>) => (
  <Heading as="h6" {...props} />
);

export default Heading;
