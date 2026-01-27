import { PageHeaderLinksType, PageHeaderTeaserImageType } from '../PageHeader';
export interface BurgerNavProps {
    ressorts: PageHeaderLinksType[];
    skills: PageHeaderLinksType[];
    brands: PageHeaderTeaserImageType[];
    magazines: PageHeaderTeaserImageType[];
    campaignUrl: string;
    campaignImage: string;
    isLoggedIn?: boolean;
    isMenuOpen: boolean;
    onMenuOpenClick: () => void;
}
declare const BurgerNav: ({ ressorts, skills, brands, magazines, campaignUrl, campaignImage, isLoggedIn, isMenuOpen, onMenuOpenClick, }: BurgerNavProps) => import("react/jsx-runtime").JSX.Element;
export default BurgerNav;
