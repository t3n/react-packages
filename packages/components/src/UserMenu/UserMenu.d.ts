import React, { ReactNode } from 'react';
export interface UserMenuProps {
    active?: boolean;
    userEmail?: string;
    loginLink?: string;
    logoutLink?: string;
    aboLink?: string;
    readingListLink?: string;
    accountLink?: string;
    isPlusUser?: boolean;
    isProMember?: boolean;
    light?: boolean;
    items?: ReactNode[];
}
export declare const UserMenuListItem: import("styled-components").StyledComponent<"li", any, {}, never>;
declare const UserMenu: React.FC<UserMenuProps>;
export default UserMenu;
