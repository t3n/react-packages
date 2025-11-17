import { ReactNode } from 'react';
import { PageHeaderProps } from '../PageHeader';
export interface PageLayoutProps extends PageHeaderProps {
    privacyManagerId: string;
    children?: ReactNode;
}
declare const PageLayout: ({ privacyManagerId, pinnedTeaser, tags, ressorts, skills, brands, magazines, headerCampaignUrl, headerCampaignImage, burgerCampaignImage, burgerCampaignUrl, isLoggedIn, hasSubscription, children, }: PageLayoutProps) => import("react/jsx-runtime").JSX.Element;
export default PageLayout;
