import React from 'react';
import { css, styled } from 'styled-components';
import {
  boxShadow as styledBoxShadow,
  color as styledColor,
  MarginProps,
  SizeProps,
  space,
  width as styledWidth,
} from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import CardHeader, { CardHeaderContent } from '../CardHeader';

// Base props shared by both variants
interface BaseCardProps extends MarginProps {
  rounded?: boolean;
  big?: boolean;
  stretch?: boolean;
  elevate?: boolean;
  dashed?: boolean;
  splitted?: boolean;
  color?: string;
  width?: SizeProps['size'];
}

// Props when Card is an anchor element
interface CardAsAnchorProps
  extends
    BaseCardProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseCardProps> {
  href: string;
  targetBlank?: boolean;
}

// Props when Card is a div element
interface CardAsDivProps
  extends
    BaseCardProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseCardProps> {
  href?: never;
  targetBlank?: never;
}

// Discriminated union type
export type CardProps = CardAsAnchorProps | CardAsDivProps;

const borderRadius = ({ rounded, theme }: CardProps & ThemeProps) =>
  `border-radius: ${rounded ? theme.border.radii[1] : 0};`;

const padding = ({ big, splitted, theme }: CardProps & ThemeProps) => {
  if (big) {
    return space({ p: [4, 7], theme });
  }
  if (splitted) {
    return space({ p: 0, theme });
  }
  return space({ p: [3, 4], theme });
};

const cardColor = ({ color: c, theme }: CardProps & ThemeProps) =>
  styledColor({ color: c, theme });

const shadow = {
  default: ({ elevate, href, theme }: CardProps & ThemeProps) =>
    elevate || href ? styledBoxShadow({ boxShadow: 'elevate', theme }) : '',
  hover: ({ href, theme }: CardProps & ThemeProps) =>
    href ? styledBoxShadow({ boxShadow: 'elevateHover', theme }) : '',
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

const cardStyles = css<CardProps>`
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
  transition:
    box-shadow 0.15s ease-out,
    transform 0.15s ease-out;
  position: relative;
  ${border};
  ${borderRadius}
  ${styledWidth}
  ${padding}
  ${cardColor}
  ${shadow.default}
  ${space}

  ${CardHeader} {
    ${headerMargin}

    ${CardHeaderContent} {
      ${padding}
    }
  }
`;

const StyledCard = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['rounded', 'big', 'dashed', 'elevate', 'splitted', 'stretch'].includes(
      prop,
    ),
})<CardProps>`
  ${cardStyles}
`;

const StyledLinkCard = styled.a.withConfig({
  shouldForwardProp: (prop) =>
    !['rounded', 'big', 'dashed', 'elevate', 'splitted', 'stretch'].includes(
      prop,
    ),
})<CardProps>`
  ${cardStyles}

  &:hover {
    ${shadow.hover}
    ${({ href }) => (href ? `transform: translate3d(0,-2px, 0);` : '')}
  }
`;

const Card = ({
  ref,
  rounded = true,
  color = 'text.primary',
  width = 1,
  mb = 3,
  ...props
}: CardProps & {
  ref?: React.RefObject<HTMLAnchorElement | HTMLDivElement | null>;
}) => {
  const isAnchor = 'href' in props && props.href;

  if (isAnchor) {
    return (
      <StyledLinkCard
        {...props}
        target={props.targetBlank ? '_blank' : undefined}
        rounded={rounded}
        color={color}
        width={width}
        mb={mb}
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
      />
    );
  }

  return (
    <StyledCard
      {...props}
      rounded={rounded}
      color={color}
      width={width}
      mb={mb}
      ref={ref as React.ForwardedRef<HTMLDivElement>}
    />
  );
};

Card.displayName = 'Card';

export default Card;
