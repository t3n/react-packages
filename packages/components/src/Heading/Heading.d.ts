import { ReactNode } from 'react';
import { SpaceProps, SizeProps, TextAlignProps } from 'styled-system';
export declare type HeadingElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface HeadingProps extends SpaceProps, SizeProps {
    as?: HeadingElements;
    styleAs?: HeadingElements;
    children?: ReactNode;
    color?: string;
    align?: TextAlignProps['textAlign'];
}
export declare const Heading: import("styled-components").StyledComponent<"h1", any, HeadingProps, never>;
export declare const H1: ({ as, ...props }: HeadingProps) => JSX.Element;
export declare const H2: ({ as, ...props }: HeadingProps) => JSX.Element;
export declare const H3: ({ as, ...props }: HeadingProps) => JSX.Element;
export declare const H4: ({ as, ...props }: HeadingProps) => JSX.Element;
export declare const H5: ({ as, ...props }: HeadingProps) => JSX.Element;
export declare const H6: ({ as, ...props }: HeadingProps) => JSX.Element;
