import React from 'react';

import { LegacyFooter } from '../LegacyFooter';
import { LegacyHeader, LegacyHeaderProps } from '../LegacyHeader';

// eslint-disable-next-line import/prefer-default-export
export const LegacyPageLayout: React.FC<LegacyHeaderProps> = ({
  user,
  userMenuLabelUrl,
  userMenuLinkGroups,
  tags,
  headerCampaignUrl,
  headerCampaignImage,
  headerCampaignImageMobile,
  newsIndicator,
  children,
}) => {
  return (
    <>
      <LegacyHeader
        user={user}
        userMenuLabelUrl={userMenuLabelUrl}
        userMenuLinkGroups={userMenuLinkGroups}
        tags={tags}
        headerCampaignUrl={headerCampaignUrl}
        headerCampaignImage={headerCampaignImage}
        headerCampaignImageMobile={headerCampaignImageMobile}
        newsIndicator={newsIndicator}
      />
      {children}
      <LegacyFooter />
    </>
  );
};
