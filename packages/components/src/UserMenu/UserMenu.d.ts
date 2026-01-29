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
export declare const UserMenuListItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, never>> & string;
declare const UserMenu: ({ active, userEmail, isProMember, items, loginLink, logoutLink, isPlusUser, aboLink, readingListLink, accountLink, light, }: UserMenuProps) => import("react/jsx-runtime").JSX.Element;
export default UserMenu;
