import React from 'react';
export type DesktopLinkGroupsType = {
    label: string;
    links: {
        label: string;
        title?: string;
        url: string;
        target?: string;
        rel?: string;
        bold?: boolean;
        onClick?: (e: React.MouseEvent, privacyManagerId?: string) => void;
    }[];
}[];
export interface DesktopFooterProps {
    privacyManagerId: string;
}
declare const DesktopFooter: ({ privacyManagerId }: DesktopFooterProps) => import("react/jsx-runtime").JSX.Element;
export default DesktopFooter;
