import React from 'react';
export interface LegacySocialBarProps {
    className?: string;
    isInFooter?: boolean;
}
export type SocialLinkType = {
    title: string;
    url: string;
    icon: JSX.Element;
    rel?: string;
    target?: string;
}[];
declare const LegacySocialBar: React.FC<LegacySocialBarProps>;
export default LegacySocialBar;
