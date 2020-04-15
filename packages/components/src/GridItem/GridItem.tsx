import styled from 'styled-components';
import {
  width,
  space,
  order,
  display,
  flexbox,
  OrderProps,
  SpaceProps,
  WidthProps,
  DisplayProps,
  FlexboxProps,
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
