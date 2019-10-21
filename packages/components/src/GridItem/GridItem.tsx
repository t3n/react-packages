import styled from 'styled-components';
import {
  width,
  space,
  order,
  OrderProps,
  SpaceProps,
  WidthProps
} from 'styled-system';

export interface GridItemProps extends SpaceProps, WidthProps, OrderProps {}

export const GridItem = styled.div<GridItemProps>`
  ${width}
  ${space}
  ${order}
`;

GridItem.defaultProps = {
  px: [0, 2],
  width: 1
};
