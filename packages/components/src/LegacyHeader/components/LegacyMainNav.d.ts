import React from 'react';
export interface LegacyMainNavProps {
    isProMember?: boolean;
    userLoading?: boolean;
    isSticky?: boolean;
}
export type MainNavLinkGroupsType = {
    label: string;
    url?: string;
    bold?: boolean;
    loading?: boolean;
    dropdownLinks?: {
        label: string;
        url: string;
    }[];
};
export declare const MainNavDropdown: import("styled-components").StyledComponent<"ul", any, {}, never>;
declare const LegacyMainNav: React.FC<LegacyMainNavProps>;
export default LegacyMainNav;
