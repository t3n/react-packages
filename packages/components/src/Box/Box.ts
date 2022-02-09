import styled from 'styled-components';
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system';

export interface BoxProps
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    FlexboxProps,
    PositionProps {}

const Box = styled.div<BoxProps>`
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${position}
`;

export default Box;
