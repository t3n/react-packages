import { ReactNode } from 'react';
import { ColorProps, SpaceProps, TextAlignProps, WidthProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
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
export declare const textStyle: import("styled-components").RuleSet<TextProps & ThemeProps>;
declare const Text: ({ inline, as, color, ...props }: TextProps) => import("react/jsx-runtime").JSX.Element;
export default Text;
