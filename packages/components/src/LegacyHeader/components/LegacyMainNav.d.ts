import React from 'react';
export declare const MainNavInnerWrapper: import("styled-components").StyledComponent<"div", any, import("../../Box").BoxProps & {
    isSticky?: boolean | undefined;
}, never>;
export declare const MainNavDropdown: import("styled-components").StyledComponent<"ul", any, {}, never>;
export declare const MainNavItem: import("styled-components").StyledComponent<"div", any, import("../../Box").BoxProps & {
    isSticky?: boolean | undefined;
}, never>;
export declare const NewsIndicator: import("styled-components").StyledComponent<"span", any, {}, never>;
declare const LegacyMainNav: React.FC<{
    isSticky?: boolean;
    newsIndicator?: number;
}>;
export default LegacyMainNav;
