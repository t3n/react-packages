import { styled } from 'styled-components';
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
  extends SpaceProps, WidthProps, OrderProps, DisplayProps, FlexboxProps {}

const GridItem = styled.div.attrs<GridItemProps>((props: GridItemProps) => ({
  width: 1,
  px: [0, 2],
  ...props,
}))`
  ${width}
  ${space}
  ${order}
  ${display}
  ${flexbox}
`;

export default GridItem;
