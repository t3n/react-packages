import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Content from '../Content';
import PageFooter from '../PageFooter';
import PageHeader, { PageHeaderProps } from '../PageHeader';

export interface PageLayoutProps extends PageHeaderProps {
  showPrivacySettingsLink?: boolean;
  privacyManagerId?: string;
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

const PageLayout: React.FC<PageLayoutProps> = ({
  showPrivacySettingsLink,
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
  hasAbo,
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
        burgerCampaignImage={burgerCampaignImage}
        burgerCampaignUrl={burgerCampaignUrl}
        hasAbo={hasAbo}
      />
      <Content wide>{children}</Content>
      <PageFooter
        showPrivacySettingsLink={showPrivacySettingsLink}
        privacyManagerId={privacyManagerId}
      />
    </PageLayoutContainer>
  );
};

export default PageLayout;
