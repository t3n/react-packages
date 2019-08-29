import styled from 'styled-components';
import {
  width,
  space,
  order,
  OrderProps,
  SpaceProps,
  WidthProps
} from 'styled-system';

interface ItemProps extends SpaceProps, WidthProps, OrderProps {}

export const GridItem = styled.div<ItemProps>`
  ${width}
  ${space}
  ${order}
`;

GridItem.defaultProps = {
  px: [0, 1],
  width: 1
};
