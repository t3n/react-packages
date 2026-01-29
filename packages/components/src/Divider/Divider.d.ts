import React, { PropsWithChildren } from 'react';
import { MarginProps, WidthProps } from 'styled-system';
export type DividerVariants = 'primary' | 'inverse';
export interface DividerProps extends WidthProps, MarginProps, PropsWithChildren {
    variant?: DividerVariants;
    iconComponent?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
declare const Divider: ({ children, variant: variantProp, iconComponent, my, ...rest }: DividerProps) => import("react/jsx-runtime").JSX.Element;
export default Divider;
