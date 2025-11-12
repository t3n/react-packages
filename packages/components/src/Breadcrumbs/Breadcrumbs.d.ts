import React, { ReactNode } from 'react';
import { LinkProps } from '../Link';
export interface BreadcrumbsItemProps extends Pick<LinkProps, 'variant'> {
    href?: string;
    className?: string;
    label: string;
    linkComponent?: (props: React.AnchorHTMLAttributes<HTMLAnchorElement> & Pick<LinkProps, 'variant' | 'children'> & {
        href: string;
    }) => JSX.Element;
}
export declare const BreadcrumbsItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<BreadcrumbsItemProps, never>> & string & Omit<({ href, label, className, variant, linkComponent: LinkComponent, }: BreadcrumbsItemProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
declare const Breadcrumbs: React.FC<{
    children?: ReactNode;
}>;
export default Breadcrumbs;
