import React from 'react';
export type PageHeaderLinksType = {
    label: string;
    url: string;
};
export type PageHeaderTeaserImageType = {
    title: string;
    url: string;
    image: string;
};
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
declare const PageHeader: React.FC<PageHeaderProps>;
export default PageHeader;
