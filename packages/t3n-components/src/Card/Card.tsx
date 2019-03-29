import React, { ReactNode } from 'react';
import styled from 'styled-components';
import {
  space,
  width,
  color as styledColor,
  boxShadow as styledBoxShadow
} from 'styled-system';
import tag from 'clean-tag';
import Header, { CardHeaderContent } from './Header';

interface CardProps {
  rounded?: boolean;
  big?: boolean;
  elevate?: boolean;
  dashed?: boolean;
  href?: string | false;
  color?: string;
  children?: ReactNode;
}

const borderRadius = ({
  rounded,
  theme
}: {
  rounded: boolean;
  theme: Theme;
}): string => `border-radius: ${rounded ? theme.border.radii[1] : 0};`;

const padding = ({ big, theme }: { big: boolean; theme: Theme }): string =>
  big ? space({ p: [3, 6], theme }) : space({ p: 3, theme });

const color = ({ color: c, theme }: { color: string; theme: any }): string =>
  styledColor({ color: c, theme });

const shadow = {
  default: ({
    elevate,
    href,
    theme
  }: {
    elevate: boolean;
    href?: string;
    theme: any;
  }): string =>
    elevate || href ? styledBoxShadow({ boxShadow: 'elevate', theme }) : '',
  hover: ({ href, theme }: { href?: string; theme: any }): string =>
    href ? styledBoxShadow({ boxShadow: 'elevateHover', theme }) : ''
};

const headerMargin = ({ big, theme }: { big: boolean; theme: any }): string =>
  big
    ? space({ mx: [-3, -6], mt: [-3, -6], mb: [3, 6], theme })
    : space({ mx: -3, mt: -3, mb: 3, theme });

const border = ({
  dashed,
  elevate,
  href,
  theme
}: {
  dashed: boolean;
  elevate: boolean;
  href?: string;
  theme: any;
}) => {
  const width = dashed && !elevate && !href ? '2px' : '1px';
  const style = dashed && !elevate && !href ? 'dashed' : 'solid';

  return `border: ${width} ${style} ${theme.colors.background.light}`;
};

const StyledCard = styled(tag)`
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
    ${({ href }) => (href ? `transform: translate3d(0,-2px, 0);` : '')}
  }

  ${Header} {
    ${headerMargin}

    ${CardHeaderContent} {
    ${padding}
  }
  }
`;

const Card = ({ href, ...props }: CardProps) => (
  <StyledCard {...props} href={href || false} is={href ? 'a' : 'div'} />
);

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
