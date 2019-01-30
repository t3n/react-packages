import styled from 'styled-components';
import { color, space, width } from 'styled-system';
import tag from 'clean-tag';
import PropTypes from 'prop-types';

const Text = styled(tag)`
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
