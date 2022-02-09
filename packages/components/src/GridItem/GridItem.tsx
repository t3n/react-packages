import styled from 'styled-components';
import {
  display,
  DisplayProps,
  flexbox,
  FlexboxProps,
  order,
  OrderProps,
  space,
  SpaceProps,
  width,
  WidthProps,
} from 'styled-system';

export interface GridItemProps
  extends SpaceProps,
    WidthProps,
    OrderProps,
    DisplayProps,
    FlexboxProps {}

const GridItem = styled.div<GridItemProps>`
  ${width}
  ${space}
  ${order}
  ${display}
  ${flexbox}
`;

GridItem.defaultProps = {
  px: [0, 2],
  width: 1,
};

export default GridItem;
