import React from 'react';
export declare const UserMenuListItem: import("styled-components").StyledComponent<"li", any, {}, never>;
export interface UserMenuProps {
    loading: boolean;
    loggedIn: boolean;
    loginLink?: string;
    logoutLink?: string;
    user?: {
        name: string;
        nickName: string;
        avatarUrl: string;
    };
    itemGroups?: {
        item: (JSX.Element | string)[];
    }[];
}
export declare const UserMenu: React.FC<UserMenuProps>;
