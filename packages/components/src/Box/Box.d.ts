import { ColorProps, FlexboxProps, LayoutProps, PositionProps, SpaceProps } from 'styled-system';
export interface BoxProps extends SpaceProps, ColorProps, LayoutProps, FlexboxProps, PositionProps {
}
declare const Box: import("styled-components").StyledComponent<"div", any, BoxProps, never>;
export default Box;
