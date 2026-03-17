import { ReactElement } from 'react';
export interface LegacySocialBarProps {
    className?: string;
    isInFooter?: boolean;
}
export type SocialLinkType = {
    title: string;
    url: string;
    icon: ReactElement;
    rel?: string;
    target?: string;
}[];
declare const LegacySocialBar: ({ className, isInFooter }: LegacySocialBarProps) => import("react/jsx-runtime").JSX.Element;
export default LegacySocialBar;
