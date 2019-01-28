import styled from 'styled-components';
import { width, space } from 'styled-system';

const gutter = ({ theme }) => space({ px: [0, 5], theme });

const Item = styled.div`
  ${width}
  ${gutter}
`;

Item.propTypes = {
  ...width.propTypes
};

Item.defaultProps = {
  width: 1
};

export default Item;
