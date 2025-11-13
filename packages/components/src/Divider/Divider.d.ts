import React, { ReactNode } from 'react';
import { MarginProps, WidthProps } from 'styled-system';
export type DividerVariants = 'primary' | 'inverse';
export interface DividerProps extends WidthProps, MarginProps {
    variant?: DividerVariants;
    iconComponent?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    children?: ReactNode;
}
declare const Divider: ({ children, variant: variantProp, iconComponent, my, ...rest }: DividerProps) => import("react/jsx-runtime").JSX.Element;
export default Divider;
