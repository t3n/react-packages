import { PropsWithChildren } from 'react';
import { SpaceProps, TextColorProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
import { LinkStyle } from '@t3n/theme/src/theme/linkStyles';
import { TextProps } from '../Text';
export type LinkVariantType = 'primary' | 'secondary' | 'highlight' | 'inverse';
export interface LinkProps extends TextColorProps, SpaceProps, Required<PropsWithChildren> {
    small?: TextProps['small'];
    disabled?: boolean;
    variant?: LinkVariantType;
}
export type LinkState = 'default' | 'hover' | 'focus' | 'visited';
export declare const createLinkStyle: (linkStyleConfig: LinkStyle) => import("styled-components").RuleSet<Omit<LinkProps, "children"> & ThemeProps>;
export declare const linkStyle: import("styled-components").RuleSet<LinkProps & ThemeProps>;
declare const Link: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>, LinkProps & ThemeProps>, never>> & string;
export default Link;
