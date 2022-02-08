import React from 'react';
export interface UserMenuProps {
    loading: boolean;
    loggedIn: boolean;
    loginLink?: string;
    logoutLink?: string;
    labelLink?: string;
    light?: boolean;
    user?: {
        label: string;
        name: string;
        avatarUrl: string;
    };
    itemGroups?: {
        item: (JSX.Element | string)[];
    }[];
}
export declare const UserMenuListItem: import("styled-components").StyledComponent<"li", any, {}, never>;
declare const UserMenu: React.FC<UserMenuProps>;
export default UserMenu;
