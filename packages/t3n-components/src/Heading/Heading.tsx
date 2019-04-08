import React, { ReactNode } from 'react';
import styled from 'styled-components';
import tag from 'clean-tag';
import {
  space,
  size,
  color,
  SpaceProps,
  SizeProps,
  ColorProps
} from 'styled-system';
import { ThemeProps, composeTextStyle } from '@t3n/styles';

export type HeadingElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends SpaceProps, SizeProps, ColorProps {
  is: HeadingElements;
  as?: HeadingElements;
  children?: ReactNode;
}

export interface StyledHeadingProps extends HeadingProps, ThemeProps {
  textStyle: HeadingElements;
}

const font = ({ textStyle, theme }: StyledHeadingProps): string =>
  composeTextStyle({ textStyle, theme });

const StyledHeading = styled(tag)<StyledHeadingProps>`
  ${font}
  ${space}
  ${size}
  ${color}
`;

const Heading = ({ as, is, ...props }: HeadingProps) => (
  <StyledHeading {...props} is={is} textStyle={as || is} />
);

Heading.displayName = 'Heading';

Heading.defaultProps = {
  is: 'h1',
  color: 'brand.anthracite'
};

export const H1 = ({ is, ...props }: HeadingProps) => (
  <Heading is="h1" {...props} />
);
export const H2 = ({ is, ...props }: HeadingProps) => (
  <Heading is="h2" {...props} />
);
export const H3 = ({ is, ...props }: HeadingProps) => (
  <Heading is="h3" {...props} />
);
export const H4 = ({ is, ...props }: HeadingProps) => (
  <Heading is="h4" {...props} />
);
export const H5 = ({ is, ...props }: HeadingProps) => (
  <Heading is="h5" {...props} />
);
export const H6 = ({ is, ...props }: HeadingProps) => (
  <Heading is="h6" {...props} />
);

export default Heading;
