import React from 'react';
export interface LegacyUserMenuProps {
    loading: boolean;
    loginUrl?: string;
    logoutUrl?: string;
    labelUrl?: string;
    user?: {
        name: string;
        nickName: string;
        avatarUrl: string;
    };
    itemGroups?: {
        item: (JSX.Element | string)[];
    }[];
}
export declare const LegacyUserMenuListItem: import("styled-components").StyledComponent<"li", any, {}, never>;
declare const LegacyUserMenu: React.FC<LegacyUserMenuProps>;
export default LegacyUserMenu;
