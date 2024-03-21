import React, { ReactNode } from 'react';
import { MarginProps, WidthProps } from 'styled-system';
export type DividerVariants = 'primary' | 'inverse';
export interface DividerProps extends WidthProps, MarginProps {
    variant?: DividerVariants;
    iconComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
    children?: ReactNode;
}
declare const Divider: React.FC<DividerProps>;
export default Divider;
