import React from 'react';
import { PageHeaderLinksType, PageHeaderTeaserImageType } from '../PageHeader';
export interface BurgerNavProps {
    ressorts: PageHeaderLinksType[];
    skills: PageHeaderLinksType[];
    brands: PageHeaderTeaserImageType[];
    magazines: PageHeaderTeaserImageType[];
    burgerCampaignUrl: string;
    burgerCampaignImage: string;
    isLoggedIn?: boolean;
    isMenuOpen: boolean;
    setIsMenuOpen: (isMenuOpen: boolean) => void;
}
declare const BurgerNav: React.FC<BurgerNavProps>;
export default BurgerNav;
