import { JustifyContentProps, SpaceProps, AlignItemsProps, HeightProps } from 'styled-system';
export interface GridProps extends JustifyContentProps, AlignItemsProps, HeightProps, SpaceProps {
    vertical?: boolean;
    reverse?: boolean;
    wide?: boolean;
    noGap?: boolean;
}
export declare const Grid: import("styled-components").StyledComponent<"div", any, GridProps, never>;
