import { AlignItemsProps, HeightProps, JustifyContentProps, SpaceProps } from 'styled-system';
export interface GridProps extends JustifyContentProps, AlignItemsProps, HeightProps, SpaceProps {
    vertical?: boolean;
    reverse?: boolean;
    wide?: boolean;
    noGap?: boolean;
}
declare const Grid: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>, never>, GridProps>> & string;
export default Grid;
