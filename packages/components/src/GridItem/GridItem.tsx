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

const GridItem = styled.div.attrs((props) => ({
  width: 1 as WidthProps,
  px: [0, 2] as SpaceProps,
  ...props,
}))<GridItemProps>`
  ${width}
  ${space}
  ${order}
  ${display}
  ${flexbox}
`;

export default GridItem;
