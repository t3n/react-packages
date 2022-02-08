import { PaddingProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
export interface ContentProps extends ThemeProps, PaddingProps {
    wide?: boolean;
    small?: boolean;
}
declare const Content: import("styled-components").StyledComponent<"div", any, ContentProps, never>;
export default Content;
