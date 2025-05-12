import React from 'react';
import { PageHeaderLinksType, PageHeaderTeaserImageType } from '../PageHeader';
export interface BurgerNavProps {
    ressorts: PageHeaderLinksType[];
    skills: PageHeaderLinksType[];
    brands: PageHeaderTeaserImageType[];
    magazines: PageHeaderTeaserImageType[];
    campaignUrl: string;
    campaignImage: string;
    hasAbo?: boolean;
    isMenuOpen: boolean;
    onMenuOpenClick: () => void;
}
declare const BurgerNav: React.FC<BurgerNavProps>;
export default BurgerNav;
