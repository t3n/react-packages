import { JustifyContentProps, SpaceProps, AlignItemsProps, HeightProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
interface GridProps extends ThemeProps, JustifyContentProps, AlignItemsProps, HeightProps, SpaceProps {
    vertical?: boolean;
    reverse?: boolean;
    wide?: boolean;
    noGap?: boolean;
}
export declare const Grid: import("styled-components").StyledComponent<"div", any, GridProps, never>;
export {};
