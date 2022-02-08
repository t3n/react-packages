import React from 'react';
export declare const LegacyUserMenuListItem: import("styled-components").StyledComponent<"li", any, {}, never>;
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
declare const LegacyUserMenu: React.FC<LegacyUserMenuProps>;
export default LegacyUserMenu;
