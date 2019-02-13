import styled from 'styled-components';
import { width, space } from 'styled-system';

const Item = styled.div`
  ${width}
  ${space}
`;

Item.propTypes = {
  ...space.propTypes,
  ...width.propTypes
};

Item.defaultProps = {
  px: [0, 1],
  width: 1
};

export default Item;
