import React from 'react';
export declare const LegacyUserMenuListItem: import("styled-components").StyledComponent<"li", any, {}, never>;
export interface LegacyUserMenuProps {
    loggedIn: boolean;
    loginLink?: string;
    logoutLink?: string;
    labelLink?: string;
    user?: {
        name: string;
        avatarUrl: string;
    };
    itemGroups?: {
        item: (JSX.Element | string)[];
    }[];
}
export declare const LegacyUserMenu: React.FC<LegacyUserMenuProps>;
