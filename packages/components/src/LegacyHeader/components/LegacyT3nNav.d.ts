import React, { ReactNode } from 'react';
export interface LegacyT3nNavProps {
    isProMember?: boolean;
    userEmail?: string;
    userMenuItems?: ReactNode[];
}
export type T3nNavLinksType = {
    label: string;
    url: string;
    dropdownLinks?: {
        label: string;
        url: string;
    }[];
};
declare const LegacyT3nNav: React.FC<LegacyT3nNavProps>;
export default LegacyT3nNav;
