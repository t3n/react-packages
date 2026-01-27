import { PropsWithChildren } from 'react';
import { PageHeaderProps } from '../PageHeader';
export interface PageLayoutProps extends PageHeaderProps, PropsWithChildren {
    privacyManagerId: string;
}
declare const PageLayout: ({ privacyManagerId, pinnedTeaser, tags, ressorts, skills, brands, magazines, headerCampaignUrl, headerCampaignImage, burgerCampaignImage, burgerCampaignUrl, isLoggedIn, hasSubscription, children, }: PageLayoutProps) => import("react/jsx-runtime").JSX.Element;
export default PageLayout;
