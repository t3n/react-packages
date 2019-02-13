import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import tag from 'clean-tag';
import { space, size, color } from 'styled-system';
import { composeTextStyle } from '@t3n/styles';

const Heading = ({ as, is, ...props }) => {
  const font = ({ textStyle, theme }) => composeTextStyle({ textStyle, theme });

  const StyledHeading = styled(tag)`
  ${font}
  ${space}
  ${size}
  ${color}
  `;

  return <StyledHeading {...props} is={is} textStyle={as || is} />;
};

Heading.displayName = 'Heading';

Heading.propTypes = {
  is: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  ...space.propTypes,
  ...size.propTypes,
  ...color.propTypes
};

Heading.defaultProps = {
  is: 'h1',
  as: null,
  // eslint-disable-next-line react/default-props-match-prop-types
  color: 'brand.anthracite'
};

export const H1 = ({ is, ...props }) => <Heading is="h1" {...props} />;
export const H2 = ({ is, ...props }) => <Heading is="h2" {...props} />;
export const H3 = ({ is, ...props }) => <Heading is="h3" {...props} />;
export const H4 = ({ is, ...props }) => <Heading is="h4" {...props} />;
export const H5 = ({ is, ...props }) => <Heading is="h5" {...props} />;
export const H6 = ({ is, ...props }) => <Heading is="h6" {...props} />;

export default Heading;
