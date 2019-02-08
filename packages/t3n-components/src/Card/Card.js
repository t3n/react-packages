import React from 'react';
import styled from 'styled-components';
import {
  space,
  width,
  color as styledColor,
  boxShadow as styledBoxShadow
} from 'styled-system';
import tag from 'clean-tag';
import PropTypes from 'prop-types';
import Header, { CardHeaderContent } from './Header';

const borderRadius = ({ rounded, theme }) =>
  `border-radius: ${rounded ? theme.border.radii[1] : 0};`;

const padding = ({ big, theme }) =>
  big ? space({ p: [4, 6], theme }) : space({ p: 4, theme });

const color = ({ color: c, theme }) => styledColor({ color: c, theme });

const shadow = {
  default: ({ elevate, href, theme }) =>
    elevate || href ? styledBoxShadow({ boxShadow: 'elevate', theme }) : '',
  hover: ({ href, theme }) =>
    href ? styledBoxShadow({ boxShadow: 'elevateHover', theme }) : ''
};

const headerMargin = ({ big, theme }) =>
  big
    ? space({ mx: [-4, -6], mt: [-4, -6], mb: [4, 6], theme })
    : space({ mx: -4, mt: -4, mb: 4, theme });

const border = ({ dashed, elevate, href }) => {
  const width = dashed && !elevate && !href ? '2px' : '1px';
  const style = dashed && !elevate && !href ? 'dashed' : 'solid';
  const opacity = elevate || href ? '.25' : '.5';
  const color = `rgba(155,155,155, ${opacity})`;

  return `border: ${width} ${style} ${color}`;
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

const Card = ({ href, ...props }) => (
  <StyledCard {...props} href={href || false} is={href ? 'a' : 'div'} />
);

Card.propTypes = {
  rounded: PropTypes.bool,
  big: PropTypes.bool,
  elevate: PropTypes.bool,
  dashed: PropTypes.bool,
  href: PropTypes.string,
  color: PropTypes.string,
  ...width.propTypes
};

Card.defaultProps = {
  rounded: true,
  big: false,
  elevate: false,
  dashed: false,
  href: '',
  color: 'brand.anthracite',
  // eslint-disable-next-line react/default-props-match-prop-types
  width: 1
};

export default Card;
