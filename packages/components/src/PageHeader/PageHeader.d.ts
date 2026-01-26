export interface PageHeaderLinksType {
    label: string;
    url: string;
}
export interface PageHeaderTeaserImageType {
    title: string;
    url: string;
    image: string;
}
export interface PageHeaderProps {
    pinnedTeaser: PageHeaderLinksType & {
        isSponsored: boolean;
        isPaidArticle: boolean;
    };
    tags: PageHeaderLinksType[];
    ressorts: PageHeaderLinksType[];
    skills: PageHeaderLinksType[];
    brands: PageHeaderTeaserImageType[];
    magazines: PageHeaderTeaserImageType[];
    headerCampaignUrl: string;
    headerCampaignImage: string;
    burgerCampaignUrl: string;
    burgerCampaignImage: string;
    isLoggedIn?: boolean;
    hasSubscription?: boolean;
}
declare const PageHeader: ({ pinnedTeaser, tags, ressorts, skills, brands, magazines, headerCampaignUrl, headerCampaignImage, burgerCampaignUrl, burgerCampaignImage, isLoggedIn, hasSubscription, }: PageHeaderProps) => import("react/jsx-runtime").JSX.Element;
export default PageHeader;
