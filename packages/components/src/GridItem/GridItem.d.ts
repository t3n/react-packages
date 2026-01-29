import { DisplayProps, FlexboxProps, OrderProps, SpaceProps, WidthProps } from 'styled-system';
export interface GridItemProps extends SpaceProps, WidthProps, OrderProps, DisplayProps, FlexboxProps {
}
declare const GridItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>, GridItemProps>, never>> & string;
export default GridItem;
