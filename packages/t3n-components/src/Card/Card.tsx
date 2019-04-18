import { ReactNode } from 'react';
import styled from 'styled-components';
import {
  space,
  width,
  color as styledColor,
  boxShadow as styledBoxShadow,
  SizeWidthProps
} from 'styled-system';
import { ThemeProps } from '@t3n/styles';
import Header, { CardHeaderContent } from './Header';

interface CardProps extends ThemeProps {
  rounded?: boolean;
  big?: boolean;
  elevate?: boolean;
  dashed?: boolean;
  href?: string | false;
  color?: string;
  width?: SizeWidthProps['size'];
  children?: ReactNode;
}

const borderRadius = ({ rounded, theme }: CardProps): string =>
  `border-radius: ${rounded ? theme.border.radii[1] : 0};`;

const padding = ({ big, theme }: CardProps): string =>
  big ? space({ p: [3, 6], theme }) : space({ p: 3, theme });

const color = ({ color: c, theme }: CardProps): string =>
  styledColor({ color: c, theme });

const shadow = {
  default: ({ elevate, href, theme }: CardProps): string =>
    elevate || href ? styledBoxShadow({ boxShadow: 'elevate', theme }) : '',
  hover: ({ href, theme }: { href?: string; theme: any }): string =>
    href ? styledBoxShadow({ boxShadow: 'elevateHover', theme }) : ''
};

const headerMargin = ({ big, theme }: CardProps): string =>
  big
    ? space({ mx: [-3, -6], mt: [-3, -6], mb: [3, 6], theme })
    : space({ mx: -3, mt: -3, mb: 3, theme });

const border = ({ dashed, elevate, href, theme }: CardProps) => {
  const borderWidth = dashed && !elevate && !href ? '2px' : '1px';
  const style = dashed && !elevate && !href ? 'dashed' : 'solid';

  return `border: ${borderWidth} ${style} ${theme.colors.background.light}`;
};

const Card = styled.div.attrs(({ href }: CardProps) => ({
  href: href || false,
  as: href ? 'a' : 'div'
}))<CardProps>`
  display: block;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-content: stretch;
  text-decoration: none;
  overflow: hidden;
  transition: box-shadow .15s ease-out, transform .15s ease-out;
  transform: translate3d(0,0,0);
  ${border};
  ${borderRadius}
  ${width}
  ${padding}
  ${color}
  ${shadow.default}

  &:hover {
    ${shadow.hover}
    ${({ href }: CardProps) =>
      href ? `transform: translate3d(0,-2px, 0);` : ''}
  }

  ${Header} {
    ${headerMargin}

    ${CardHeaderContent} {
      ${padding}
    }
  }
`;

Card.defaultProps = {
  rounded: true,
  big: false,
  elevate: false,
  dashed: false,
  href: '',
  color: 'brand.anthracite',
  width: 1
};

export default Card;
