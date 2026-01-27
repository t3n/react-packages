import { AlignItemsProps, HeightProps, JustifyContentProps, SpaceProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
export interface GridProps extends JustifyContentProps, AlignItemsProps, HeightProps, SpaceProps {
    vertical?: boolean;
    reverse?: boolean;
    wide?: boolean;
    noGap?: boolean;
}
declare const Grid: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>, GridProps & ThemeProps>, never>> & string;
export default Grid;
