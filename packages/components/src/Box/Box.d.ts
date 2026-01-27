import { ColorProps, FlexboxProps, LayoutProps, PositionProps, SpaceProps } from 'styled-system';
export interface BoxProps extends SpaceProps, ColorProps, LayoutProps, FlexboxProps, PositionProps {
}
declare const Box: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, BoxProps>> & string;
export default Box;
