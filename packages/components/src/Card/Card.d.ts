import { ReactNode } from 'react';
import { SizeProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
interface CardProps extends ThemeProps {
    rounded?: boolean;
    big?: boolean;
    stretch?: boolean;
    elevate?: boolean;
    dashed?: boolean;
    splitted?: boolean;
    href?: string | false;
    color?: string;
    width?: SizeProps['size'];
    children?: ReactNode;
}
export declare const Card: import("styled-components").StyledComponent<"div", any, {
    href: string | false | undefined;
    as: string;
} & CardProps, "href" | "as">;
export {};
