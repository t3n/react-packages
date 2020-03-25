import { ReactNode } from 'react';
import styled from 'styled-components';
import {
  space,
  width,
  color as styledColor,
  boxShadow as styledBoxShadow,
  SizeProps,
  MarginProps
} from 'styled-system';

import { ThemeProps } from '@t3n/theme';
import { CardHeader, CardHeaderContent } from '../CardHeader';

export interface CardProps extends MarginProps {
  rounded?: boolean;
  big?: boolean;
  stretch?: boolean;
  elevate?: boolean;
  dashed?: boolean;
  splitted?: boolean;
  href?: string | false;
  color?: string;
  width?: SizeProps['size'];
  children?: ReactNode;
}

const borderRadius = ({ rounded, theme }: CardProps & ThemeProps) =>
  `border-radius: ${rounded ? theme.border.radii[1] : 0};`;

const padding = ({ big, splitted, theme }: CardProps & ThemeProps) =>
  big
    ? space({ p: [4, 7], theme })
    : splitted
    ? space({ p: 0, theme })
    : space({ p: [3, 4], theme });

const color = ({ color: c, theme }: CardProps & ThemeProps) =>
  styledColor({ color: c, theme });

const shadow = {
  default: ({ elevate, href, theme }: CardProps & ThemeProps) =>
    elevate || href ? styledBoxShadow({ boxShadow: 'elevate', theme }) : '',
  hover: ({ href, theme }: CardProps & ThemeProps) =>
    href ? styledBoxShadow({ boxShadow: 'elevateHover', theme }) : ''
};

const headerMargin = ({ big, theme }: CardProps & ThemeProps) =>
  big
    ? space({ mx: [-4, -7], mt: [-4, -7], mb: [4, 7], theme })
    : space({ mx: -4, mt: -4, mb: 4, theme });

const border = ({ dashed, elevate, href, theme }: CardProps & ThemeProps) => {
  const borderWidth = dashed && !elevate && !href ? '2px' : '1px';
  const style = dashed && !elevate && !href ? 'dashed' : 'solid';

  return `border: ${borderWidth} ${style} ${theme.colors.shades.grey232}`;
};

export const Card = styled.div.attrs(({ href }: CardProps) => ({
  href,
  as: href ? 'a' : 'div'
}))<CardProps>`
  display: block;
  background-color: white;
  display: flex;
  flex-direction: ${({ splitted }) => (splitted ? 'row' : 'column')};
  flex-wrap: ${({ splitted }) => (splitted ? 'wrap' : 'nowrap')};
  height: ${({ stretch }) => (stretch ? '100%' : 'auto')};
  justify-content: flex-start;
  justify-content: stretch;
  text-decoration: none;
  overflow: hidden;
  transition: box-shadow .15s ease-out, transform .15s ease-out;
  position: relative;
  ${border};
  ${borderRadius}
  ${width}
  ${padding}
  ${color}
  ${shadow.default}
  ${space}

  &:hover {
    ${shadow.hover}
    ${({ href }: CardProps) =>
      href ? `transform: translate3d(0,-2px, 0);` : ''}
  }

  ${CardHeader} {
    ${headerMargin}

    ${CardHeaderContent} {
      ${padding}
    }
  }
`;

Card.displayName = 'Card';

Card.defaultProps = {
  rounded: true,
  color: 'text.primary',
  width: 1,
  mb: 3
};
