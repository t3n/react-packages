import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Content from '../Content';
import LegacyFooter from '../LegacyFooter';
import PageHeader, { PageHeaderProps } from '../PageHeader';

export interface LegacyPageLayoutProps extends PageHeaderProps {
  privacyManagerId: string;
  children?: ReactNode;
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
const LegacyPageLayout: React.FC<LegacyPageLayoutProps> = ({
  privacyManagerId,
  pinnedTeaser,
  tags,
  ressorts,
  skills,
  brands,
  magazines,
  headerCampaignUrl,
  headerCampaignImage,
  burgerCampaignUrl,
  burgerCampaignImage,
  isLoggedIn,
  children,
}) => {
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
        burgerCampaignUrl={burgerCampaignUrl}
        burgerCampaignImage={burgerCampaignImage}
        isLoggedIn={isLoggedIn}
      />
      <Content wide>{children}</Content>
      <LegacyFooter privacyManagerId={privacyManagerId} />
    </PageLayoutContainer>
  );
};

export default LegacyPageLayout;
