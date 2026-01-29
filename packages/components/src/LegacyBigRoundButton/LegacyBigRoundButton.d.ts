import React from 'react';
import { MarginProps } from 'styled-system';
export interface LegacyBigRoundButtonProps extends MarginProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    url: string;
    tooltipText: string;
    rel?: string;
}
declare const LegacyBigRoundButton: ({ icon, url, tooltipText, rel, ...marginProps }: LegacyBigRoundButtonProps) => import("react/jsx-runtime").JSX.Element;
export default LegacyBigRoundButton;
