import { ReactNode } from 'react';
import { TextColorProps, SpaceProps } from 'styled-system';
import { LinkStyle } from '@t3n/theme/src/theme/linkStyles';
import { TextProps } from '../Text/Text';
export declare type LinkVariantType = 'primary' | 'secondary' | 'highlight' | 'inverse';
export interface LinkProps extends TextColorProps, SpaceProps {
    small?: TextProps['small'];
    disabled?: boolean;
    variant?: LinkVariantType;
    children: ReactNode;
}
export declare type LinkState = 'default' | 'hover' | 'focus' | 'visited';
export declare const createLinkStyle: (linkStyleConfig: LinkStyle) => import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<Pick<LinkProps, "small" | "p" | "color" | "disabled" | "variant" | "m" | "margin" | "mt" | "marginTop" | "mr" | "marginRight" | "mb" | "marginBottom" | "ml" | "marginLeft" | "mx" | "marginX" | "my" | "marginY" | "padding" | "pt" | "paddingTop" | "pr" | "paddingRight" | "pb" | "paddingBottom" | "pl" | "paddingLeft" | "px" | "paddingX" | "py" | "paddingY">, any>>;
export declare const linkStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<LinkProps, any>>;
export declare const Link: import("styled-components").StyledComponent<"a", any, LinkProps, never>;
