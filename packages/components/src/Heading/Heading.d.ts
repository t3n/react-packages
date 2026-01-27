import React, { PropsWithChildren } from 'react';
import { SizeProps, SpaceProps, TextAlignProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
export type HeadingElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface HeadingProps extends SpaceProps, SizeProps, PropsWithChildren {
    as?: HeadingElements;
    styleAs?: HeadingElements;
    color?: string;
    align?: TextAlignProps['textAlign'];
}
declare const Heading: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, HeadingProps & ThemeProps>> & string;
export declare const H1: ({ ...props }: Omit<HeadingProps, "as">) => import("react/jsx-runtime").JSX.Element;
export declare const H2: ({ ...props }: Omit<HeadingProps, "as">) => import("react/jsx-runtime").JSX.Element;
export declare const H3: ({ ...props }: Omit<HeadingProps, "as">) => import("react/jsx-runtime").JSX.Element;
export declare const H4: ({ ...props }: Omit<HeadingProps, "as">) => import("react/jsx-runtime").JSX.Element;
export declare const H5: ({ ...props }: Omit<HeadingProps, "as">) => import("react/jsx-runtime").JSX.Element;
export declare const H6: ({ ...props }: Omit<HeadingProps, "as">) => import("react/jsx-runtime").JSX.Element;
export default Heading;
