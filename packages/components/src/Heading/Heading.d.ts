import React, { ReactNode } from 'react';
import { SizeProps, SpaceProps, TextAlignProps } from 'styled-system';
export type HeadingElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface HeadingProps extends SpaceProps, SizeProps {
    as?: HeadingElements;
    styleAs?: HeadingElements;
    color?: string;
    align?: TextAlignProps['textAlign'];
    children?: ReactNode;
}
declare const Heading: import("styled-components").StyledComponent<"h1", any, HeadingProps, never>;
export declare const H1: React.FC<HeadingProps>;
export declare const H2: React.FC<HeadingProps>;
export declare const H3: React.FC<HeadingProps>;
export declare const H4: React.FC<HeadingProps>;
export declare const H5: React.FC<HeadingProps>;
export declare const H6: React.FC<HeadingProps>;
export default Heading;
