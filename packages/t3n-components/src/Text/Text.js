import styled from 'styled-components';
import { color, space, width } from 'styled-system';
import tag from 'clean-tag';
import PropTypes from 'prop-types';
import { composeTextStyle } from '@t3n/styles';

const font = ({ theme }) => composeTextStyle({ textStyle: 'regular', theme });

const Text = styled(tag)`
  ${font}
  ${color}
  ${space}
  ${width}
`;

Text.displayName = 'Text';

Text.propTypes = {
  is: PropTypes.oneOf(['p', 'span']),
  ...color.propTypes,
  ...space.propTypes,
  ...width.propTypes
};

Text.defaultProps = {
  is: 'p',
  color: 'brand.anthracite',
  width: 1
};

export default Text;
