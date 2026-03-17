import { PropsWithChildren } from 'react';
import { ColorProps, SpaceProps, TextAlignProps, WidthProps } from 'styled-system';
export interface TextProps extends ColorProps, SpaceProps, WidthProps, Required<PropsWithChildren> {
    as?: 'p' | 'span';
    bold?: boolean;
    italic?: boolean;
    inline?: boolean;
    small?: boolean;
    secondary?: boolean;
    align?: TextAlignProps['textAlign'];
}
export declare const textStyle: import("styled-components").RuleSet<TextProps>;
declare const Text: ({ inline, as, color, ...props }: TextProps) => import("react/jsx-runtime").JSX.Element;
export default Text;
