import styled from 'styled-components';
import { width, space, SpaceProps, WidthProps } from 'styled-system';
import { ThemeProps } from '@t3n/styles';

interface ItemProps extends SpaceProps, WidthProps, ThemeProps {}

const Item = styled.div<ItemProps>`
  ${width}
  ${space}
`;

Item.defaultProps = {
  px: [0, 1],
  width: 1
};

export default Item;
