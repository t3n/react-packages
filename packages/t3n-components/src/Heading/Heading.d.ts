import { ReactNode } from 'react';
import { SpaceProps, SizeProps, ColorProps } from 'styled-system';
import { ThemeProps } from '@t3n/styles';
export declare type HeadingElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface HeadingProps extends SpaceProps, SizeProps, ColorProps {
    is: HeadingElements;
    as?: HeadingElements;
    children?: ReactNode;
}
export interface StyledHeadingProps extends HeadingProps, ThemeProps {
    textStyle: HeadingElements;
}
declare const Heading: {
    ({ as, is, ...props }: HeadingProps): JSX.Element;
    displayName: string;
    defaultProps: {
        is: string;
        color: string;
    };
};
export declare const H1: ({ is, ...props }: HeadingProps) => JSX.Element;
export declare const H2: ({ is, ...props }: HeadingProps) => JSX.Element;
export declare const H3: ({ is, ...props }: HeadingProps) => JSX.Element;
export declare const H4: ({ is, ...props }: HeadingProps) => JSX.Element;
export declare const H5: ({ is, ...props }: HeadingProps) => JSX.Element;
export declare const H6: ({ is, ...props }: HeadingProps) => JSX.Element;
export default Heading;
