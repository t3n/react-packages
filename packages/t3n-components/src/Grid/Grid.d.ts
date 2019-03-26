import { JustifyContentProps } from 'styled-system';
interface GridProps extends JustifyContentProps, ThemeProps {
    vertical?: boolean;
    reverse?: boolean;
    wide?: boolean;
    noGap?: boolean;
}
declare const Grid: import("styled-components").StyledComponent<"div", any, GridProps, never>;
export default Grid;
