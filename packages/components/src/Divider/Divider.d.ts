import React from 'react';
import { WidthProps, MarginProps } from 'styled-system';
export declare type DividerVariants = 'primary' | 'inverse';
export interface DividerProps extends WidthProps, MarginProps {
    variant?: DividerVariants;
    iconComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
    children?: string;
}
export declare const Divider: React.FC<DividerProps>;
