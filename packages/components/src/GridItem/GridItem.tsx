import styled from 'styled-components';
import { width, space, SpaceProps, WidthProps } from 'styled-system';

interface ItemProps extends SpaceProps, WidthProps {}

export const GridItem = styled.div<ItemProps>`
  ${width}
  ${space}
`;

GridItem.defaultProps = {
  px: [0, 1],
  width: 1
};
