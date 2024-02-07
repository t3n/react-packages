import React, { ReactNode } from 'react';
export interface UserMenuProps {
    userEmail?: string;
    loginLink?: string;
    logoutLink?: string;
    proMembershipLink?: string;
    readingListLink?: string;
    accountLink?: string;
    isProMember?: boolean;
    light?: boolean;
    userMenuItems?: ReactNode[];
}
export declare const UserMenuListItem: import("styled-components").StyledComponent<"li", any, {}, never>;
declare const UserMenu: React.FC<UserMenuProps>;
export default UserMenu;
