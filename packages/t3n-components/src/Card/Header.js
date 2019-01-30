import styled from 'styled-components';
import { color } from 'styled-system';
import PropTypes from 'prop-types';

const backgroundColor = ({ bg, theme }) => color({ bg, theme });

const backgroundImage = ({ bgImage, bgSize, bgPosition }) => `
  ${bgImage ? `background-image: url(${bgImage});` : ''}
  background-size: ${bgSize};
  background-position: ${bgPosition};
`;

const CardHeader = styled.div`
  height: 220px;
  ${backgroundColor}
  ${backgroundImage}
`;

CardHeader.displayName = 'CardHeader';

CardHeader.propTypes = {
  bg: PropTypes.string,
  bgImage: PropTypes.string,
  bgSize: PropTypes.string,
  bgPosition: PropTypes.string
};

CardHeader.defaultProps = {
  bg: 'brand.anthracite',
  bgImage: '',
  bgSize: 'cover',
  bgPosition: 'center'
};

export default CardHeader;
