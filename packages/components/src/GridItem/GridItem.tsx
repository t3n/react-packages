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

export const GridItem = styled.div<GridItemProps>`
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
