import React, { ReactNode } from 'react';
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
export declare const textStyle: import("styled-components").RuleSet<TextProps>;
declare const Text: React.FC<TextProps>;
export default Text;
