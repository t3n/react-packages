import styled from 'styled-components';
import tag from 'clean-tag';
import PropTypes from 'prop-types';

const Ratio = styled(tag)`
  ${({ ratio }) =>
    ratio && ratio !== 'auto'
      ? `
  &:before {
    content: '';
    float: left;
    width: 0;
    height: 0;
    padding-bottom: ${100 / ratio}%;
  }

  &:after {
    content: '';
    display: block;
    clear: both;
  } 
  `
      : ''}
`;

Ratio.propTypes = {
  ratio: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  is: PropTypes.string
};

Ratio.defaultProps = {
  ratio: 16 / 9,
  is: 'div'
};

export default Ratio;
