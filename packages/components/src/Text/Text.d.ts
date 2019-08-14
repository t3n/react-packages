import { ReactNode } from 'react';
import { ColorProps, SpaceProps, WidthProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
interface TextProps extends ColorProps, SpaceProps, WidthProps, ThemeProps {
    as?: 'p' | 'span';
    bold?: boolean;
    italic?: boolean;
    inline?: boolean;
    small?: boolean;
    children: ReactNode;
}
declare const Text: import("styled-components").StyledComponent<"p", any, {
    as: "p" | "span";
} & TextProps, "as">;
export default Text;
