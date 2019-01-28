import styled from 'styled-components';
import PropTypes from 'prop-types';

import { textStyle } from 'styled-system';

const font = ({ as, theme }) => textStyle({ textStyle: as, theme });

const Headline = styled.h1`
  ${font}
`;

// /* Display: inline; */
// /* text-transform: uppercase; */
// /* background: linear-gradient(to right, red 100%, transparent 0) 0
//     ${FONT_SIZE * 1.25}rem repeat-x; */
// /* background-size: 1px; */

Headline.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};

Headline.defaultProps = {
  as: 'h1'
};

export default Headline;
