import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import tag from 'clean-tag';
import PropTypes from 'prop-types';

const borderRadius = ({ rounded, theme }) =>
  `border-radius: ${rounded ? theme.border.radii[1] : 0};`;

const padding = ({ theme }) => space({ p: 4, theme });

const StyledCard = styled(tag)`
  background-color: white;
  ${borderRadius}
  ${padding}
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const Card = ({ href, ...props }) => (
  <StyledCard {...props} href={href || false} is={href ? 'a' : 'div'} />
);

Card.propTypes = {
  href: PropTypes.string,
  rounded: PropTypes.bool
};

Card.defaultProps = {
  href: '',
  rounded: true
};

export default Card;
