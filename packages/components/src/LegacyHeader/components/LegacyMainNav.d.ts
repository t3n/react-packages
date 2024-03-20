import React from 'react';
export interface LegacyMainNavProps {
    isSticky?: boolean;
}
export type MainNavLinkGroupsType = {
    label: string;
    url?: string;
    bold?: boolean;
    indicator?: boolean;
    dropdownLinks?: {
        label: string;
        url: string;
    }[];
};
export declare const MainNavDropdown: import("styled-components").StyledComponent<"ul", any, {}, never>;
export declare const Indicator: import("styled-components").StyledComponent<"span", any, {}, never>;
declare const LegacyMainNav: React.FC<LegacyMainNavProps>;
export default LegacyMainNav;
