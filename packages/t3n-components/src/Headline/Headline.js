import styled from 'styled-components';
import PropTypes from 'prop-types';
import tag from 'clean-tag';
import { textStyle, space, size, color } from 'styled-system';

const font = ({ is, theme }) => textStyle({ textStyle: is, theme });

const Headline = styled(tag)`
  ${font}
  ${space}
  ${size}
  ${color}
`;

// /* Display: inline; */
// /* text-transform: uppercase; */
// /* background: linear-gradient(to right, red 100%, transparent 0) 0
//     ${FONT_SIZE * 1.25}rem repeat-x; */
// /* background-size: 1px; */

Headline.displayName = 'Headline';

Headline.propTypes = {
  is: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};

Headline.defaultProps = {
  is: 'h1'
};

export default Headline;
