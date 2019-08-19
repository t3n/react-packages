import { ReactNode } from 'react';
import { ColorProps, SpaceProps, WidthProps } from 'styled-system';
export interface TextProps extends ColorProps, SpaceProps, WidthProps {
    as?: 'p' | 'span';
    bold?: boolean;
    italic?: boolean;
    inline?: boolean;
    small?: boolean;
    secondary?: boolean;
    children: ReactNode;
}
export declare const Text: import("styled-components").StyledComponent<"p", any, {
    as: "p" | "span";
} & TextProps, "as">;
export {};
