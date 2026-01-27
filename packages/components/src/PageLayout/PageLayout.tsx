import React, { PropsWithChildren } from 'react';
import { styled } from 'styled-components';

import Content from '../Content';
import PageFooter from '../PageFooter';
import PageHeader, { PageHeaderProps } from '../PageHeader';

export interface PageLayoutProps extends PageHeaderProps, PropsWithChildren {
  privacyManagerId: string;
}

const PageLayoutContainer = styled.div`
  width: 100%;
  min-height: 100svh;
  display: flex;
  flex-direction: column;

  > * {
    width: 100%;
  }

  ${Content} {
    flex-grow: 1;
  }
`;

const PageLayout = ({
  privacyManagerId,
  pinnedTeaser,
  tags,
  ressorts,
  skills,
  brands,
  magazines,
  headerCampaignUrl,
  headerCampaignImage,
  burgerCampaignImage,
  burgerCampaignUrl,
  isLoggedIn,
  hasSubscription,
  children,
}: PageLayoutProps) => {
  return (
    <PageLayoutContainer>
      <PageHeader
        pinnedTeaser={pinnedTeaser}
        tags={tags}
        ressorts={ressorts}
        skills={skills}
        brands={brands}
        magazines={magazines}
        headerCampaignUrl={headerCampaignUrl}
        headerCampaignImage={headerCampaignImage}
        burgerCampaignImage={burgerCampaignImage}
        burgerCampaignUrl={burgerCampaignUrl}
        isLoggedIn={isLoggedIn}
        hasSubscription={hasSubscription}
      />
      <Content wide>{children}</Content>
      <PageFooter privacyManagerId={privacyManagerId} />
    </PageLayoutContainer>
  );
};

export default PageLayout;
