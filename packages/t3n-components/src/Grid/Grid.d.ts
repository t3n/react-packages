import { JustifyContentProps, SpaceProps } from 'styled-system';
interface GridProps extends JustifyContentProps, ThemeProps, SpaceProps {
    vertical?: boolean;
    reverse?: boolean;
    wide?: boolean;
    noGap?: boolean;
}
declare const Grid: import("styled-components").StyledComponent<"div", any, GridProps, never>;
export default Grid;
