import React from 'react';
import { BoxProps } from '../Box';
export interface AdProps extends BoxProps {
    name: string;
    preview?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
export declare const Ad: React.ForwardRefExoticComponent<AdProps & React.RefAttributes<HTMLDivElement>>;
