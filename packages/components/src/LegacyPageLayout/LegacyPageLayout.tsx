import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';

import Box from '../Box';
import useIsMobile from '../hooks/useIsMobile';
import LegacyAd from '../LegacyAd';
import LegacyFooter from '../LegacyFooter';
import LegacyHeader, { LegacyHeaderProps } from '../LegacyHeader';
import { PrivacyManagerType } from '../PageFooter';

export interface LegacyPageLayoutProps extends LegacyHeaderProps {
  showP0?: boolean;
  previewP0?: boolean;
  showP2?: boolean;
  previewP2?: boolean;
  showP13?: boolean;
  previewP13?: boolean;
  privacySettingsModal?: PrivacyManagerType;
}

const Wrapper = styled(Box)`
  ${({ theme }) => color({ theme, bg: 'background.primary' })}
`;

const LegacyPageLayout: React.FC<LegacyPageLayoutProps> = ({
  user,
  userMenuLabelUrl,
  userMenuLinkGroups,
  tags,
  tagsLoading,
  headerCampaignUrl,
  headerCampaignImage,
  headerCampaignImageMobile,
  newsIndicator,
  proIndicator,
  showP0,
  previewP0,
  showP2,
  previewP2,
  showP13,
  previewP13,
  privacySettingsModal,
  children,
}) => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      {!isMobile && showP0 && <LegacyAd name="p0" preview={previewP0} />}
      <LegacyHeader
        user={user}
        userMenuLabelUrl={userMenuLabelUrl}
        userMenuLinkGroups={userMenuLinkGroups}
        tags={tags}
        tagsLoading={tagsLoading}
        headerCampaignUrl={headerCampaignUrl}
        headerCampaignImage={headerCampaignImage}
        headerCampaignImageMobile={headerCampaignImageMobile}
        newsIndicator={newsIndicator}
        proIndicator={proIndicator}
        showAds={showP2}
        adsPreview={previewP2}
      />
      {isMobile && showP13 && <LegacyAd name="p13" preview={previewP13} />}
      {children}
      <LegacyFooter privacySettingsModal={privacySettingsModal} />
    </Wrapper>
  );
};

export default LegacyPageLayout;
