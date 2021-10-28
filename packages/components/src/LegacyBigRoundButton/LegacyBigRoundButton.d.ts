import React from 'react';
import { MarginProps } from 'styled-system';
export interface LegacyBigRoundButtonProps extends MarginProps {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    url: string;
    tooltipText: string;
}
export declare const LegacyBigRoundButton: React.FC<LegacyBigRoundButtonProps>;
