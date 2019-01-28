import styled from 'styled-components';
import { maxWidth as styledMaxWidth } from 'styled-system';
import { rem } from 'polished';
import PropTypes from 'prop-types';

const maxWidth = ({ wide, theme }) =>
  wide ? '100%' : styledMaxWidth({ maxWidth: [rem(1150)], theme });

const Content = styled.div`
  width: 100%;
  ${maxWidth};
  margin: 0 auto;
`;

Content.propTypes = {
  wide: PropTypes.bool
};

Content.defaultProps = {
  wide: false
};

export default Content;
