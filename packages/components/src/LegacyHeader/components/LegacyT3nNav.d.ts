import React from 'react';
import { LegacyUserMenuProps } from '../../LegacyUserMenu';
export interface LegacyT3nNavProps {
    user: LegacyUserMenuProps['user'];
    labelUrl: string;
    itemGroups: LegacyUserMenuProps['itemGroups'];
}
export declare type T3nNavLinksType = {
    label: string;
    url: string;
    dropdownLinks?: {
        label: string;
        url: string;
    }[];
};
declare const LegacyT3nNav: React.FC<LegacyT3nNavProps>;
export default LegacyT3nNav;
