import { ReactNode } from 'react';
import { ColorProps, SpaceProps, TextAlignProps, WidthProps } from 'styled-system';
export interface TextProps extends ColorProps, SpaceProps, WidthProps {
    as?: 'p' | 'span';
    bold?: boolean;
    italic?: boolean;
    inline?: boolean;
    small?: boolean;
    secondary?: boolean;
    align?: TextAlignProps['textAlign'];
    children: ReactNode;
}
export declare const textStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<TextProps, any>>;
declare const Text: import("styled-components").StyledComponent<"p", any, {
    as: "p" | "span";
} & TextProps, "as">;
export default Text;
