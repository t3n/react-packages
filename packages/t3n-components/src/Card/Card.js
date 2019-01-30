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
import Header from './Header';

const borderRadius = ({ rounded, theme }) =>
  `border-radius: ${rounded ? theme.border.radii[1] : 0};`;

const padding = ({ narrow, theme }) =>
  narrow ? space({ p: 4, theme }) : space({ p: 6, theme });

const headerMargin = ({ narrow, theme }) =>
  narrow
    ? space({ mx: -4, mt: -4, mb: 4, theme })
    : space({ mx: -6, mt: -6, mb: 6, theme });

const color = ({ color: c, theme }) => styledColor({ color: c, theme });

const StyledCard = styled(tag)`
  display: block;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-content: stretch;
  text-decoration: none;
  overflow: hidden;
  ${borderRadius}
  ${width}
  ${padding}
  ${color}
  transition: box-shadow .3s ease-out, transform .3s ease-out;
  transform: translate3d(0,0,0);

  ${({ shadow, href, theme }) =>
    shadow || href ? styledBoxShadow({ boxShadow: 'elevate', theme }) : ''}

  ${Header} {
    ${headerMargin}
  }

  &:hover {
    ${({ href, theme }) =>
      href ? styledBoxShadow({ boxShadow: 'elevateHover', theme }) : ''}
    ${({ href }) => (href ? `transform: translate3d(0,-4px, 0);` : '')}
  }
`;

const Card = ({ href, ...props }) => (
  <StyledCard {...props} href={href || false} is={href ? 'a' : 'div'} />
);

Card.propTypes = {
  href: PropTypes.string,
  rounded: PropTypes.bool,
  narrow: PropTypes.bool,
  color: PropTypes.string,
  ...width.propTypes
};

Card.defaultProps = {
  href: '',
  rounded: true,
  narrow: false,
  color: 'brand.anthracite',
  width: 1
};

export default Card;
