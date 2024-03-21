import { ReactNode } from 'react';
import { SpaceProps, TextColorProps } from 'styled-system';
import { LinkStyle } from '@t3n/theme/src/theme/linkStyles';
import { TextProps } from '../Text';
export type LinkVariantType = 'primary' | 'secondary' | 'highlight' | 'inverse';
export interface LinkProps extends TextColorProps, SpaceProps {
    small?: TextProps['small'];
    disabled?: boolean;
    variant?: LinkVariantType;
    children: ReactNode;
}
export type LinkState = 'default' | 'hover' | 'focus' | 'visited';
export declare const createLinkStyle: (linkStyleConfig: LinkStyle) => import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<Omit<LinkProps, "children">, any>>;
export declare const linkStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<LinkProps, any>>;
declare const Link: import("styled-components").StyledComponent<"a", any, LinkProps, never>;
export default Link;
